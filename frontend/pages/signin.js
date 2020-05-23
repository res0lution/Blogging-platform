import React from "react";

import Layout from "../components/Layout";
import Signin from "../components/auth/Signin";

const SigninPage = () => {
  return (
    <Layout>
      <h1 className="text-center">Signin</h1>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Signin />
        </div>
      </div>
    </Layout>
  );
};

export default SigninPage;
