import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, createTask, updateTask, deleteTask } from "../services/Api";
import Swal from "sweetalert2";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import TaskFilter from "../components/TaskFilter";
import LoadingSpinner from "../components/LoadingSpinner";
import "./Dashboard.css";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionData = localStorage.getItem("session");
    if (!sessionData) {
      console.log("No hay sesión detectada, redirigiendo al login...");
      navigate("/login");
    } else {
      setUser(JSON.parse(sessionData));
      loadTasks();
    }
  }, [navigate]);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const respuestaAPI = await getTasks();
      
      if (respuestaAPI.data) {
        console.log("--- LISTADO DE TAREAS DESDE LA API ---");
        console.table(respuestaAPI.data);
        setTasks(respuestaAPI.data);
      }
      
    } catch (error) {
      console.error("Error al conectar con MockAPI (Tareas):", error);
      Swal.fire("Error", "No pudimos conectar con el servidor de tareas", "error");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      const resultado = await createTask(taskData);
      console.log("Tarea creada con éxito en la API:", resultado.data);
      
      Swal.fire("¡Éxito!", "Tarea agregada correctamente", "success");
      loadTasks();
    } catch (error) {
      console.error("Error al intentar guardar la tarea:", error);
      Swal.fire("Error", "No se pudo agregar la tarea. Inténtalo de nuevo.", "error");
    }
  };

  const changeStatus = async (id, nuevoEstado) => {
    try {
      const res = await updateTask(id, { estado: nuevoEstado });
      console.log(`Tarea ${id} actualizada a estado: ${nuevoEstado}`, res.data);
      loadTasks();
    } catch (error) {
      console.error("Error al actualizar estado:", error);
      Swal.fire("Error", "No se pudo cambiar el estado", "error");
    }
  };

  const handleEditTask = async (task) => {
    const { value: formValues } = await Swal.fire({
      title: 'Editar Tarea',
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Título" value="${task.titulo}">` +
        `<input id="swal-input2" class="swal2-input" placeholder="Descripción" value="${task.descripcion || ''}">` +
        `<input id="swal-input3" class="swal2-input" type="date" value="${task.fechaVencimiento || ''}">`,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        return {
          titulo: document.getElementById('swal-input1').value,
          descripcion: document.getElementById('swal-input2').value,
          fechaVencimiento: document.getElementById('swal-input3').value
        }
      }
    });

    if (formValues) {
      try {
        await updateTask(task.id, formValues);
        Swal.fire("Actualizado", "Tarea modificada con éxito", "success");
        loadTasks();
      } catch (error) {
        Swal.fire("Error", "No se pudo editar", "error");
      }
    }
  };

  const removeTask = async (id) => {
    const confirmacion = await Swal.fire({
      title: "¿Eliminar tarea?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
    });

    if (confirmacion.isConfirmed) {
      try {
        await deleteTask(id);
        console.log(`Tarea con ID ${id} eliminada correctamente.`);
        Swal.fire("¡Eliminada!", "La tarea ya no existe.", "success");
        loadTasks();
      } catch (error) {
        console.error("Error al eliminar:", error);
        Swal.fire("Error", "No se pudo borrar la tarea", "error");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("session");
    navigate("/login");
  };

  const filteredTasks = tasks.filter((t) => 
    filter === "Todas" ? true : t.estado === filter
  );

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="user-info">
          <h1>Tablero de Proyectos</h1>
          {user && (
            <p> Hola, <b>{user.username}</b> ({user.department})</p>
          )}
        </div>
        <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
      </header>

      <main className="dashboard-main">
        <section className="controls-section">
          <TaskForm onAdd={addTask} />
          <TaskFilter current={filter} onFilterChange={setFilter} />
        </section>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="tasks-grid">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onStatusChange={changeStatus} 
                  onDelete={removeTask} 
                  onEdit={handleEditTask}
                />
              ))
            ) : (
              <p className="empty-message">No se encontraron tareas con este filtro.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
