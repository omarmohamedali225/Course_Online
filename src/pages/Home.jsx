import React from "react";
import Header from "../components/header/Header";
import Courses from "../components/courses/Courses";
import Call from "../components/call/Call";
import Ball from "../components/ball/Ball";
import logo from "../images/icon_site.png";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Course Online</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <Ball />
      <Header />
      <Courses />
      <Call />
    </>
  );
};

export default Home;
