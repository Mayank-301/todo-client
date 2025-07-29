function Btn({ onShowForm, onFilterChange }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto col-12 fw-bold p-4 text-secondary d-flex justify-content-between">
          
          <button type="button" className="btn bg-primary text-white fs-5" onClick={onShowForm}>
            Add Task
          </button>

          <div className="dropdown">
            <button
              className="btn dropdown-toggle bg-secondary text-white fs-5"
              type="button"
              data-bs-toggle="dropdown"
            >
              Filter
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={() => onFilterChange("All")}>All</a></li>
              <li><a className="dropdown-item" onClick={() => onFilterChange("Completed")}>Completed</a></li>
              <li><a className="dropdown-item" onClick={() => onFilterChange("Incompleted")}>Incompleted</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Btn;
