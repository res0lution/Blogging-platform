import React, { useState, useEffect } from "react";
import Router from "next/router";

import { signin, authenticate, isAuth } from "../../api/auth";

const Signin = () => {
  const [values, setValues] = useState({
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
      email: values.email,
      password: values.password,
    };

    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        authenticate(data, () => {
          if (isAuth && isAuth.role === 1) {
            Router.push("/admin");
          } else {
            Router.push("/user");
          }
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

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
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
            Signin
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
      {signinForm()}
    </>
  );
};

export default Signin;
