import { Link } from "react-router-dom";

function StudentTable({ students, deleteStudent }) {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Course</th>
          <th>Duration</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.course}</td>
            <td>{s.course_duration}</td>
            <td>
              <Link
                to={`/edit/${s.id}`}
                className="btn btn-warning btn-sm me-2"
              >
                Edit
              </Link>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteStudent(s.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
