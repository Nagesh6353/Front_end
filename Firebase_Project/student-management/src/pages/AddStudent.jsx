import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import StudentForm from "../components/StudentForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddStudent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");

  const studentCollection = collection(db, "Student");

  const handleSubmit = async () => {
    await addDoc(studentCollection, {
      name,
      email,
      course,
      course_duration: duration,
    });

    toast.success("Student Added Successfully");
    navigate("/");
  };

  return (
    <StudentForm
      name={name} setName={setName}
      email={email} setEmail={setEmail}
      course={course} setCourse={setCourse}
      duration={duration} setDuration={setDuration}
      handleSubmit={handleSubmit}
    />
  );
}

export default AddStudent;
