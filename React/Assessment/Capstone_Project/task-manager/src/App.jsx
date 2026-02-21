import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./features/tasks/taskSlice";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import SearchBar from "./components/SearchBar";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.list);

  const [search, setSearch] = useState("");
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="bg-light min-vh-100 py-4">

    <div className="container">

      {/* Page Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Task Manager</h2>
        <p className="text-muted mb-0">Manage your daily tasks efficiently</p>
      </div>

      {/* Form */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-6">
          <TaskForm editTask={editTask} setEditTask={setEditTask} />
        </div>
      </div>

      {/* Search */}
      <div className="row justify-content-center mb-3">
        <div className="col-lg-6">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* Table */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <TaskTable tasks={filteredTasks} setEditTask={setEditTask} />
        </div>
      </div>

    </div>

  </div>
);
}

export default App;