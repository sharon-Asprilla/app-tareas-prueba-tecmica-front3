export default function TaskFilter({ current, onFilterChange }) {
  const filters = ["Todas", "Pendiente", "En Progreso", "Completada"];

  return (
    <div className="task-filter">
      {filters.map((f) => (
        <button
          key={f}
          className={`filter-btn ${current === f ? "active" : ""}`}
          onClick={() => onFilterChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}