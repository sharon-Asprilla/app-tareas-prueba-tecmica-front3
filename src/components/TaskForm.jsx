import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("El título es obligatorio");
    
    onAdd({ titulo: title, descripcion: description, fechaVencimiento: dueDate, estado: "Pendiente" });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="¿Qué hay que hacer?" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input 
        type="text" 
        placeholder="Descripción" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input 
        type="date" 
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}