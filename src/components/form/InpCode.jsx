import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./form.css";
import { useFormik } from "formik";

const InpCode = () => {
  const [error, setError] = useState("");

  const onSubmit = async (val) => {
    const url = "";
    // data user send
    const data = {
      Code: val.code
    };
    setError('Code --> '+data.Code)
    // send data server and check user
    // try {
    //   const responce = await axios.postForm(url, {
    //     email: data.email,
    //     password: data.password,
    //   });
    //   setError(responce.data.msg);
    //   if (responce.data.state) {
    //     setError("");
    //     localStorage.setItem("token", responce.data.token);
    //     navigate("/", { replace: true });
    //     Data.token = responce.data.token
    //   }
    // } catch {
    //   setError("حدث خطأ ما");
    // }
  };
  const { values, isSubmitting, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        code: "",
      },
      onSubmit,
    });
    
  return (
    <div className="login">
      <div className="card">
        <div className="card-header fs-4 fw-bold text-black-50">
          تفعيل درس اونلاين
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
              <label htmlFor="exampleInputCode" className="form-label">
                الكود الخاص بك <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={values.code}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="exampleInputCode"
                autoComplete="true"
                placeholder="code?$#123"
                name="code"
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={isSubmitting}
            >
              تفعيل {isSubmitting && <FontAwesomeIcon icon={faSpinner} spin />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InpCode;
