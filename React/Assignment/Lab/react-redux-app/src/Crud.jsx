import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/userSlice";

function Crud() {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (!name) return;

    if (editingId) {
      dispatch(updateUser({ id: editingId, name }));
      setEditingId(null);
    } else {
      dispatch(addUser({ id: Date.now(), name }));
    }

    setName("");
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEditingId(user.id);
  };

  return (
    <div className="container mt-5">
      <h2 className="my-4 text-center">Task 2 :- Redux Toolkit CRUD</h2>

      <div className="row mb-3">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            {editingId ? "Update User" : "Add User"}
          </button>
        </div>
      </div>

      {/* TABLE START */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th width="200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(deleteUser(user.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* TABLE END */}
    </div>
  );
}

export default Crud;