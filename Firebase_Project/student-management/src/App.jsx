import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import { ToastContainer } from "react-toastify";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <div className="container mt-3">
      <nav className="mb-4">
        <Link className="btn btn-primary me-2" to="/">Home</Link>
        <Link className="btn btn-success" to="/add">Add Student</Link>
      </nav>

      <ToastContainer position="top-right" autoClose={2000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
