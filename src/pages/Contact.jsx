import React from "react";
import Call from "../components/call/Call";
import { Helmet } from "react-helmet";
import logo from "../images/icon_site.png";
const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <Call />
    </>
  );
};

export default Contact;
