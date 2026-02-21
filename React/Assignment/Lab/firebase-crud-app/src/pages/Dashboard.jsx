import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function Dashboard() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const usersCollection = collection(db, "users");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getDocs(usersCollection);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      setError("Failed to fetch users");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    if (!name) return;

    setLoading(true);
    try {
      if (editingId) {
        const userDoc = doc(db, "users", editingId);
        await updateDoc(userDoc, { name });
        setEditingId(null);
      } else {
        await addDoc(usersCollection, { name });
      }

      setName("");
      fetchUsers();
    } catch (err) {
      setError("Operation failed");
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const userDoc = doc(db, "users", id);
      await deleteDoc(userDoc);
      fetchUsers();
    } catch (err) {
      setError("Delete failed");
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Firebase CRUD</h2>

      {loading && (
        <div className="text-center my-2">
          <div className="spinner-border text-primary"></div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center">{error}</div>
      )}

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-primary mt-2" onClick={handleSubmit}>
          {editingId ? "Update User" : "Add User"}
        </button>
      </div>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {user.name}
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;