import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import axios from "axios";
import "./form.css";

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [state, setState] = useState(false);

  const onSubmit = async (e) => {
    const url = "https://unformidable-tax.000webhostapp.com/register.php";
    const data = {
      name: e.name,
      email: e.email,
      password: e.password,
    };
    try {
      const register = await axios.postForm(url, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      setMessage(register.data.msg);
      if (register.data.state) {
        setState(true);
      } else {
        setState(false);
      }
    } catch {
      setMessage("حدث خطأ ما");
    }
  };

  const { values, isSubmitting, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      onSubmit,
    });

  return (
    <div className="login">
      <div className="card">
        <div className="card-header fs-4 fw-bold text-black-50">
          إنشاء حساب درس اونلاين
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {message !== "" && (
              <div
                className={`alert ${
                  state ? "alert-success" : "alert-danger"
                } text-center`}
                role="alert"
                onClick={() => setMessage("")}
              >
                {message}
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                اسمك<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="exampleInputName1"
                placeholder="مثلا.. omar او عمر"
                name="name"
              />
            </div>
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
              <div id="emailHelp" className="form-text">
                البريد الخاص بك محمي لم نشاركه مع اي جهة
              </div>
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
              إنشاء الحساب{" "}
              {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
            </button>
          </form>
        </div>
        <div className="card-footer text-body-secondary text-center">
          لديك حساب بالفعل <Link to="/login">سجل الان</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
