export default function TaskCard({ task, onStatusChange, onDelete, onEdit }) {
  const isCompleted = task.estado === "Completada";

  return (
    <div className={`task-card ${isCompleted ? 'completed' : ''}`}>
      <div className="task-info">
        <h3>{task.titulo}</h3>
        <p className="task-desc">{task.descripcion || "Sin descripción"}</p>
        <small className="task-date">Vence: {task.fechaVencimiento || "Sin fecha"}</small>
""        <span className={`badge ${task.estado.toLowerCase()}`}>{task.estado}</span>
        <span className={`badge ${task.estado.toLowerCase().replace(/\s+/g, '-')}`}>{task.estado}</span>
      </div>
      <div className="task-actions">
        <select 
          value={task.estado} 
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className="status-select"
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En Progreso">En Progreso</option>
          <option value="Completada">Completada</option>
        </select>
        
        <button className="btn-action edit" onClick={() => onEdit(task)}>
          ✏️
        </button>
        
        <button className="btn-action delete" onClick={() => onDelete(task.id)}>
          🗑
        </button>
      </div>
    </div>
  );
}