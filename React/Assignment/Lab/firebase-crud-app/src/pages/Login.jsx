import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInWithPopup(auth, provider);
    navigate("/dashboard");
  };

  return (
    <div className="container text-center mt-5">
      <h2>Firebase Google Login</h2>
      <button className="btn btn-danger mt-3" onClick={handleLogin}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;