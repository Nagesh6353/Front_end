import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import { toast } from "react-toastify";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const getStudent = async () => {
      const docRef = doc(db, "Student", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setName(docSnap.data().name);
        setEmail(docSnap.data().email);
        setCourse(docSnap.data().course);
        setDuration(docSnap.data().course_duration);
      }
    };

    getStudent();
  }, [id]);

  const handleSubmit = async () => {
    await updateDoc(doc(db, "Student", id), {
      name,
      email,
      course,
      course_duration: duration,
    });

    toast.success("Student Updated Successfully");
    navigate("/");
  };

  return (
    <StudentForm
      name={name} setName={setName}
      email={email} setEmail={setEmail}
      course={course} setCourse={setCourse}
      duration={duration} setDuration={setDuration}
      handleSubmit={handleSubmit}
      editId={id}
    />
  );
}

export default EditStudent;
