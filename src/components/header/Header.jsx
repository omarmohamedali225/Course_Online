import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useData } from "../GlobalContext/GlobalContext";
const Header = (props) => {
  const [login, setLogin] = useState(false);
  const { token } = useData();
  const HandelTitle = () => {
    if (!props.nameCourse) {
      return "مرحبا بكم في اكاديمية درس اونلاين";
    } else {
      return props.nameCourse;
    }
  };
  const HandelPrag = () => {
    if (!props.titleCourse) {
      return "اهلا بكم في بعض الكورسات يوجد فيديوهات مجانية وعند شراءك لكورس معين تواصل معنا اسفل الصفحة لأعطائك كود التفعيل الخاص بك..";
    } else {
      return props.titleCourse;
    }
  };
  const btn = () => {
    if (props.btnCourse) {
      return null;
    } else {
      return (
        <Link to={"/login"} className="btn mt-5 w-25">
          قم بالتسجيل الأن
        </Link>
      );
    }
  };

  useEffect(() => {
    if (token != null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <header>
      <div className="container text-center">
        <h1>{HandelTitle()}</h1>
        <h5>{HandelPrag()}</h5>
        {!login && btn()}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          fillOpacity="1"
          d="M0,192L24,186.7C48,181,96,171,144,176C192,181,240,203,288,202.7C336,203,384,181,432,186.7C480,192,528,224,576,213.3C624,203,672,149,720,154.7C768,160,816,224,864,256C912,288,960,288,1008,266.7C1056,245,1104,203,1152,197.3C1200,192,1248,224,1296,224C1344,224,1392,192,1416,176L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
    </header>
  );
};

export default Header;
