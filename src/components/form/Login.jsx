import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./form.css";
import { useFormik } from "formik";
import { useData } from "../GlobalContext/GlobalContext";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const Data = useData()

  const onSubmit = async (val) => {
    const url = "https://unformidable-tax.000webhostapp.com/login.php";
    // data user send
    const data = {
      email: val.email,
      password: val.password,
    };
    // send data server and check user
    try {
      const responce = await axios.postForm(url, {
        email: data.email,
        password: data.password,
      });
      setError(responce.data.msg);
      if (responce.data.state) {
        setError("");
        localStorage.setItem("token", responce.data.token);
        navigate("/", { replace: true });
        Data.token = responce.data.token
      }
    } catch {
      setError("حدث خطأ ما");
    }
  };

  const { values, isSubmitting, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
    });
    
  return (
    <div className="login">
      <div className="card">
        <div className="card-header fs-4 fw-bold text-black-50">
          تسجيل درس اونلاين
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {error != "" && (
              <div
                className="alert alert-danger text-center"
                role="alert"
                onClick={() => setError("")}
              >
                {error}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                البريد الألكتروني<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                autoComplete="true"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
                name="email"
              />
            </div>
            <div className="mb-3 password">
              <label htmlFor="exampleInputPassword1" className="form-label">
                كلمة السر<span className="text-danger">*</span>
              </label>
              <input
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="******"
                name="password"
              />
              <i className="fa-solid fa-eye-slash"></i>
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={isSubmitting}
            >
              انطلق {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
            </button>
          </form>
        </div>
        <div className="card-footer text-body-secondary text-center">
          ليس لديك حساب <Link to="/signup">سجل الان</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
