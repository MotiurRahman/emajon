import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { AuthContext } from "../../Context/UserContext";
import "./Loging.css";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="form_container">
      <h3 className="text-center">Login</h3>
      <form onSubmit={handleLogin} className="form-info">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input className="input-field" name="email" type="text" />
        </div>

        <div className="form-control">
          <label htmlFor="password">Prossword</label>
          <input className="input-field" name="password" type="password" />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <p className="text-newAcount">
        New to Ema-john? <Link to="/signup">Create New Account</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
