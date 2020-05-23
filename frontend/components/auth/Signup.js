import React, { useState } from "react";
import Router from "next/router";

import { signup, isAuth } from "../../api/auth";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true,
  });

  useEffect(() => {
    isAuth() && Router.push("/");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          error: "",
          loading: false,
          name: "",
          email: "",
          password: "",
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const showLoading = () =>
    values.loading ? <div className="alert alert-info">Loading...</div> : "";

  const showError = () =>
    values.error ? (
      <div className="alert alert-danger">{values.error}</div>
    ) : (
      ""
    );

  const showMessage = () =>
    values.message ? (
      <div className="alert alert-info">{values.message}</div>
    ) : (
      ""
    );

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            className="form-control"
            placeholder="Type your name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            className="form-control"
            placeholder="Type your email"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            value={values.password}
            onChange={handleChange("password")}
            className="form-control"
            placeholder="Type your password"
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      {showLoading()}
      {showError()}
      {showMessage()}
      {signupForm()}
    </>
  );
};

export default Signup;
