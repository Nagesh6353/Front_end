import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import StudentTable from "../components/StudentTable";
import { toast } from "react-toastify";

function Home() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const studentCollection = collection(db, "Student");

  // READ
  const getStudents = async () => {
    const data = await getDocs(studentCollection);
    setStudents(data.docs.map(d => ({ ...d.data(), id: d.id })));
  };

  useEffect(() => {
    getStudents();
  }, []);

  // DELETE
  const deleteStudent = async (id) => {
    await deleteDoc(doc(db, "Student", id));
    toast.error("Student Deleted Successfully");
    getStudents();
  };

  // SEARCH FILTER
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      {/* 🔷 Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-dark">
          <i className="bi bi-mortarboard-fill text-primary me-2"></i>
          Student List
        </h3>

        <span className="badge bg-primary fs-6">
          Total: {filteredStudents.length}
        </span>
      </div>

      {/* 🔍 Search Card */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <label className="form-label fw-semibold">
            <i className="bi bi-search me-1"></i> Search Student
          </label>

          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-person-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by student name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 📋 Student Table */}
      <StudentTable
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />

    </div>
  );
}

export default Home;
