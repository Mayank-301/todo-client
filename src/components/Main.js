import React from 'react';
import Form from './Form';

function Main({ tasks, onAdd, onToggleCompleted, onDelete, onEdit, showForm, editTask }) {
  return (
    <div className="container mt-4">
      {showForm && (
        <Form
          onAdd={onAdd}
          editData={editTask}
        />
      )}

      <div className="row p-3 position-relative ">
        <div className="col-md-6 d-flex m-auto shadow bg-secondary rounded-3 p-4 flex-column gap-3">
          {tasks.length === 0 ? (
            <div className="text-center bg-white col-sm-4 col-lg-3 m-auto rounded-3 p-2">
              No Todos
            </div>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="col-12 rounded-3 bg-white d-flex justify-content-between align-items-center p-3"
              >
                <div className="d-flex flex-row gap-2 align-items-center">
                  <input
                    className="form-check-input fs-3 bg-secondary"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleCompleted(index)}
                  />
                  <div className="me-auto">
                    <p
                      className={`ms-2 text-secondary align-item-center ${
                        task.completed ? 'text-decoration-line-through' : ''
                      }`}
                    >
                      {task.title} <br />
                      <small>{task.date}</small>
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-danger "
                    onClick={() => onDelete(index)}
                  >
                   <i class="ri-delete-bin-line   "></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => onEdit(index)}
                  >
                    <i class="ri-pencil-line"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
