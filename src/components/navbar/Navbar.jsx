import React, { useEffect, useState } from "react";
import "./Navbar.css";
import icon from "../../images/icon_site.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faSign } from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useData } from "../GlobalContext/GlobalContext";
const Navbar = () => {
  const location = useLocation().pathname;
  const { token } = useData();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (token != null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [token]);
  const HandelExit = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setLogin(false);
    window.location.reload()
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={icon} /> درس اونلاين
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item p-2 item">
              <Link
                className={`nav-link ${location == "/" && "active"}`}
                aria-current="page"
                to={"/"}
              >
                <FontAwesomeIcon icon={faHome} /> الرئيسية
              </Link>
            </li>
            <li className="nav-item p-2 item">
              <Link
                className={`nav-link ${location == "/course" && "active"}`}
                to={"/course"}
              >
                <FontAwesomeIcon icon={faBook} /> الكورسات
              </Link>
            </li>
            <li className="nav-item p-2 item">
              <Link
                className={`nav-link ${location == "/contact" && "active"}`}
                to={"/contact"}
              >
                <FontAwesomeIcon icon={faContactBook} /> اتصل بنا
              </Link>
            </li>
            {!login ? (
              <>
                <li className="nav-item p-2">
                  <Link
                    className={`nav-link ${location == "/login" && "active"}`}
                    aria-current="page"
                    to={"/login"}
                  >
                    <FontAwesomeIcon icon={faSignIn} /> تسجيل
                  </Link>
                </li>
                <li className="nav-item p-2">
                  <Link
                    className={`nav-link ${location == "/signup" && "active"}`}
                    to={"/signup"}
                  >
                    <FontAwesomeIcon icon={faSign} /> إنشاء حساب
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item p-2">
                <Link className="nav-link" onClick={HandelExit}>
                  <FontAwesomeIcon icon={faSignOut} /> خروج
                </Link>
              </li>
            )}
            {/* <li className="nav-item p-2">
            <div className="nav-link">
              <a className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faGear}/>
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item p-2">
                  <Link className="nav-link" aria-current="page" to={'/login'}>تسجيل</Link>
                </li>
                <li className="nav-item p-2">
                  <Link className="nav-link" to={'/signup'}>إنشاء حساب</Link>
                </li>
              </ul>
            </div>
          </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
