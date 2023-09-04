import React from "react";
import SignUpForm from "../components/form/SignUp";
import { Helmet } from "react-helmet";
import logo from "../images/icon_site.png";
const SignUp = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SignUp</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <SignUpForm />
    </>
  );
};

export default SignUp;
