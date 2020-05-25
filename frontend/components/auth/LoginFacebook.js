import Router from "next/router";
import FacebookLogin from "react-facebook-login";

import { loginWithFacebook, authenticate, isAuth } from "../../api/auth";
import { FB_APP_ID } from "../../config";

const LoginFacebook = () => {
  const responseFacebook = (response) => {
    loginWithFacebook(response).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  return (
    <div className="pb-3">
      <FacebookLogin
        appId={`${FB_APP_ID}`}
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="btn btn-primary"
        icon="fa-facebook"
      />
    </div>
  );
};

export default LoginFacebook;
