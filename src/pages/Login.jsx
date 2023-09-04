import React from "react";
import LoginForm from "../components/form/Login";
import { Helmet } from "react-helmet";
import logo from "../images/icon_site.png";
const Login = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
