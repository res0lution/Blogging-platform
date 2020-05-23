import React, { useEffect } from "react";
import Router from "next/router";

import { isAuth } from "../../api/auth";

const Admin = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push(`/signin`);
    } else if (isAuth().role !== 1) {
      Router.push(`/`);
    }
  }, []);

  return <>{children}</>;
};

export default Admin;
