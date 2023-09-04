import React from "react";
import Courses from "../components/courses/Courses";
import logo from "../images/icon_site.png";
import { Helmet } from "react-helmet";
const Course = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Courses</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <Courses />
    </>
  );
};

export default Course;
