import React, { useEffect, useState } from "react";
import { useData } from "../components/GlobalContext/GlobalContext";
import Courses from "../components/courses/Courses";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";
import Ball from "../components/ball/Ball";
import { Helmet } from "react-helmet";
import logo from '../images/icon_site.png'
const VideosCourse = () => {
  const { id } = useParams();
  const Data = useData();
  const [name, setName] = useState("جاري تحميل البيانات...");
  useEffect(() => {
    async function NameCourseById() {
      try {
        const { data } = await Data.datacourse(id);
        if (data) {
          setName(data.name);
        }
      } catch (err) {
        setName(err.data);
      }
    }
    NameCourseById();
  }, []);
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Course {id}</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <Ball />
      <Header nameCourse={name} titleCourse btnCourse="false" />
      <Courses VideoCourse Courseid={id} />
    </>
  );
};

export default VideosCourse;
