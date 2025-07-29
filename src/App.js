import React, { useState } from "react";
import Header from "./components/Header";
import Btn from "./components/MainBtns";
import Main from "./components/Main";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleAddTask = (task) => {
    if (editTask !== null) {
      const updated = [...tasks];
      updated[editTask] = task;
      setTasks(updated);
      setEditTask(null);
    } else {
      setTasks([...tasks, task]);
    }
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const handleEdit = (index) => {
    setEditTask(tasks[index]);
    setShowForm(true);
  };

  const handleToggleCompleted = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incompleted") return !task.completed;
    return true; // All
  });

  return (
    <>
      <Header />
      <Btn onShowForm={() => setShowForm(true)} onFilterChange={setFilter} />
      <Main
        tasks={filteredTasks}
        onAdd={handleAddTask}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggleCompleted={handleToggleCompleted}
        showForm={showForm}
        editTask={editTask}
      />
    </>
  );
}

export default App;
