function StudentForm({
  name, setName,
  email, setEmail,
  course, setCourse,
  duration, setDuration,
  handleSubmit,
  editId
}) {

  const submitForm = () => {
    if (!name || !email || !course || !duration) {
      alert("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    handleSubmit();
  };

  return (
    <div className="card p-4">
      <h4>{editId ? "Update Student" : "Add Student"}</h4>

      <input className="form-control mb-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input className="form-control mb-2"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input className="form-control mb-3"
        placeholder="Course Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />

      <button className="btn btn-primary" onClick={submitForm}>
        {editId ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default StudentForm;
