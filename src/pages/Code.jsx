import React from "react";
import InpCode from "../components/form/InpCode";
import logo from "../images/icon_site.png";
import { Helmet } from "react-helmet";
const Code = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Code Subscribe</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <InpCode />
    </>
  );
};

export default Code;
