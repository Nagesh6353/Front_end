import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskTable = ({ tasks, setEditTask }) => {
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <p className="text-muted">No records found</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div style={{ width: "100%", maxWidth: "900px" }}>
        
        <div className="table-responsive">
          <table className="table table-sm table-bordered table-hover align-middle shadow-sm">
            
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.dueDate}</td>
                  <td>
                    <span
                      className={`badge ${
                        task.priority === "High"
                          ? "bg-danger"
                          : task.priority === "Medium"
                          ? "bg-warning text-dark"
                          : "bg-success"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => setEditTask(task)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => {
                        if (window.confirm("Delete this task?")) {
                          dispatch(deleteTask(task.id));
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default TaskTable;