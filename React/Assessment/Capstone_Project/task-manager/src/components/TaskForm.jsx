import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";

const TaskForm = ({ editTask, setEditTask }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  useEffect(() => {
    if (editTask) {
      setForm(editTask);
    }
  }, [editTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.dueDate) {
      alert("All fields are required!");
      return;
    }

    if (editTask) {
      dispatch(updateTask(form));
      setEditTask(null);
    } else {
      dispatch(addTask(form));
    }

    setForm({
      title: "",
      description: "",
      dueDate: "",
      priority: "Low",
    });
  };

  return (
  <div className="container mt-5 d-flex justify-content-center">
    <div
      className="card shadow border-0"
      style={{ width: "100%", maxWidth: "500px" }}
    >
      <div className="card-header bg-primary text-white text-center py-2">
        <h6 className="mb-0">
          {editTask ? "Update Task" : "Add New Task"}
        </h6>
      </div>

      <div className="card-body p-3">
        <form onSubmit={handleSubmit}>
          
          {/* Title */}
          <div className="mb-2">
            <label className="form-label small fw-semibold">
              Task Title
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="title"
              placeholder="Enter task title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="mb-2">
            <label className="form-label small fw-semibold">
              Description
            </label>
            <textarea
              className="form-control form-control-sm"
              rows="2"
              name="description"
              placeholder="Enter task description"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          {/* Row */}
          <div className="row">
            <div className="col-6 mb-2">
              <label className="form-label small fw-semibold">
                Due Date
              </label>
              <input
                type="date"
                className="form-control form-control-sm"
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-6 mb-2">
              <label className="form-label small fw-semibold">
                Priority
              </label>
              <select
                className="form-select form-select-sm"
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="text-center mt-3">
            <button
              type="submit"
              className={`btn btn-sm ${
                editTask ? "btn-warning" : "btn-success"
              } px-3`}
            >
              {editTask ? "Update" : "Add"}
            </button>

            {editTask && (
              <button
                type="button"
                className="btn btn-sm btn-secondary ms-2"
                onClick={() => {
                  setEditTask(null);
                  setForm({
                    title: "",
                    description: "",
                    dueDate: "",
                    priority: "Low",
                  });
                }}
              >
                Cancel
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  </div>
);
};

export default TaskForm;