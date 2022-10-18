import React, { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext, { AuthContext } from "../../Context/UserContext";

const SignUp = () => {
  const [error, setError] = useState(null);
  const { creatUser } = useContext(AuthContext);

  const handleSignupBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password !== confirm) {
      setError("Your assword din't match.");
      return;
    }

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email, password, confirm);
  };
  return (
    <div className="form_container">
      <h3 className="text-center">Sign Up</h3>
      <form onSubmit={handleSignupBtn} className="form-info">
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input className="input-field" name="email" type="text" />
        </div>

        <div className="form-control">
          <label htmlFor="password">Prossword</label>
          <input className="input-field" name="password" type="password" />
        </div>

        <div className="form-control">
          <label htmlFor="confirm">Confirm Prossword</label>
          <input className="input-field" name="confirm" type="confirm" />
        </div>

        <button type="submit" className="login-btn">
          Sing Up
        </button>
      </form>
      <p className="text-newAcount">
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
