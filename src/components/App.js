import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selected, setSelected] = useState("All");
  // const [deleted, setDeleted] = useState(null);

  function onTaskFormSubmit() {

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        selected={selected}
        setSelected={setSelected}
      />
      <NewTaskForm
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
