import React from "react";
import "./Call.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import img from '../../images/call.svg'
const Call = () => {
  const handelSubmit=(e)=>{
    e.preventDefault()
    console.log('الخدمة غير متوفرة لك')
  }
  return (
    <section className="call pt-5 pb-5" id="call">
      <div className="container">
        <div className="maintitle mt-5 mb-5">
          <h1 className="adr">اتصل بنا</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <form action="" method="post">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  البريد الألكتروني<span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control email"
                  id="exampleFormControlInput1"
                  placeholder="البريد الخاص بك"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  رسالتك<span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="اكتب رسالتك هنا"
                  name="msg"
                ></textarea>
              </div>
              <div className="mb-3">
                {/* <input type="submit" value="ارسال" /> */}
                <button className="btn btn-success" onClick={handelSubmit}>ارسل تعليقك</button>
              </div>
            </form>
            <ul>
              <li title="Facebook">
                <a
                  href="https://www.facebook.com/omarmohamed2518"
                  target="_blank"
                >
                 <FontAwesomeIcon icon={faFacebook} style={{color:'#1877f2'}} beat/>
                </a>
              </li>
              <li title="Instagram">
                <a
                  href="https://www.instagram.com/3mar_m7md225/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} style={{color:'#c13584'}} beat/>
                </a>
              </li>
              <li title="Github">
                <a href="https://github.com/omarmohamedali225" target="_blank">
                  <FontAwesomeIcon icon={faGithub} style={{color:'#4078c0'}} beat/>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-12 d-none d-lg-block">
            <img src={img} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Call;
