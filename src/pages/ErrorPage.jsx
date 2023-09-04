import React from "react";
import Error from "../components/error/Error";
import logo from "../images/icon_site.png";
import { Helmet } from "react-helmet";
const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <Error />
    </>
  );
};

export default ErrorPage;
