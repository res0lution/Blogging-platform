import React from "react";

import Layout from "../components/Layout";
import Signup from "../components/auth/Signup";

const SignupPage = () => {
  return (
    <Layout>
      <h1 className="text-center">Signup</h1>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Signup />
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
