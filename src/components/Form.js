import React, { useState, useEffect } from 'react';

function Form({ onAdd, editData }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Incompleted');

  useEffect(() => {
    if (editData) {
      setName(editData.title);
      setStatus(editData.completed ? 'Completed' : 'Incompleted');
    }
  }, [editData]);

  const handleAdd = () => {
    if (!name.trim()) return;

    const task = {
      ...editData,
      title: name,
      completed: status === 'Completed', // ✅ converts to boolean
      date: new Date().toLocaleString(), // current time
    };

    onAdd(task);
    setName('');
    setStatus('Incompleted');
  };

  return (
    <div className="container-fluid position-absolute top-40 start-50 translate-middle-x z-3">
      <div className="row">
        <div className="col-md-4 m-auto col-12 shadow bg-white rounded-3 p-4">
          <h5 className="fw-bold">{editData ? 'Edit Task' : 'Add TODO'}</h5>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Incompleted</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="d-flex flex-row gap-2 mt-3">
            <button className="btn bg-primary text-white fs-5" onClick={handleAdd}>
              {editData ? 'Update' : 'Add Task'}
            </button>
            <button
              className="btn bg-secondary text-white fs-5"
              onClick={() => setName('')}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
