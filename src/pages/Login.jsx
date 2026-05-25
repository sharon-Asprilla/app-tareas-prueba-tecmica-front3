import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUserToApi } from "../services/api"; // Importamos la función nueva
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState(""); // Variable para el nombre
  const [department, setDepartment] = useState("Desarrollo"); // Variable para el depto
  const navigate = useNavigate(); // Para movernos de página

  // Esta función se ejecuta al dar clic en el botón
  const handleLogin = async (event) => {
    event.preventDefault(); // Evita que la página se recargue
    
    if (username === "") {
      alert("¡Oye! Tienes que escribir un nombre.");
      return;
    }

    try {
      // PASO 1: Enviar los datos del usuario a la API de MockAPI
      const respuestaServidor = await saveUserToApi({ username: username, department: department });
      console.log("Respuesta de la API al registrar usuario:", respuestaServidor.data);

      // PASO 2: Si la API respondió bien, guardamos en LocalStorage para mantener la sesión
      localStorage.setItem("session", JSON.stringify({ username, department }));
      
      // PASO 3: Navegamos a la ruta del tablero
      navigate("/tablero");
    } catch (error) {
      console.error("Error detallado al conectar con MockAPI:", error);
      alert("No se pudo conectar con la API de usuarios");
    }
  };

  return (
    <div className="login-wrapper">
      {/* Columna Izquierda: Formulario */}
      <div className="login-left">
        <div className="logo-container">
          <span className="logo-icon">📦</span>
          <span className="logo-text">Gestor de Tareas </span>
        </div>
        
        <div className="login-content">
          <h1 className="login-title">Sign Up Tareas</h1>
          <p className="login-subtitle">Start your journey with us today.</p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-field">
              <label>Nombre de Usuario</label>
              <div className="input-wrapper">
               
                <input 
                  type="text" 
                  placeholder="Ej: pepito cordoba" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-field">
              <label>Departamento</label>
              <div className="input-wrapper">
             
                <select 
                  value={department} 
                  onChange={(e) => setDepartment(e.target.value)}
                  className="select-custom"
                >
                  <option value="Desarrollo">Desarrollo</option>
                  <option value="Diseño">Diseño</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Recursos Humanos">Recursos Humanos</option>
                  <option value="Contabilidad">Contabilidad</option>
                  <option value="Finanzas">Finanzas</option>
                  <option value="Logística">Logística</option>
                  <option value="Producción">Producción</option>
                  <option value="Ventas">Ventas</option>
                  <option value="Calidad">Calidad</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Jurídico">Jurídico</option>
                  <option value="Administración">Administración</option>
                  <option value="Comunicaciones">Comunicaciones</option>
                  <option value="Infraestructura">Infraestructura</option>
                  <option value="Seguridad">Seguridad</option>
                  <option value="Operaciones">Operaciones</option>
                  <option value="Gerencia">Gerencia</option>
                  <option value="Otros">Otros</option>
                  
                </select>
              </div>
            </div>

            <button type="submit" className="btn-primary">Ingresar al Panel</button>
          </form>

          <div className="separator">
            <span>or continue with</span>
          </div>

          <div className="social-group">
            <button className="btn-social" type="button"><img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" /></button>
            <button className="btn-social" type="button"><img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" /></button>
            <button className="btn-social" type="button"><img src="https://www.svgrepo.com/show/445331/apple-black.svg" alt="Apple" /></button>
          </div>
        </div>
      </div>

      {/* Columna Derecha: Fondo Artístico */}
      <div className="login-right">
        <div className="liquid-bg"></div>
      </div>
    </div>
  );
}
