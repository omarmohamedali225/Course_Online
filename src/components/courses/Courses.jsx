import React, { useEffect, useState } from "react";
import { useData } from "../GlobalContext/GlobalContext";
import Course from "./Item";
import axios from "axios";
import "./Courses.css";
const Courses = (props) => {
  const { Courseid } = props;
  const Data = useData();
  const [data, setData] = useState([]);
  const [dataCourse, setDataCourse] = useState([]);
  const [load, setLoad] = useState(true);
  //handel courses show
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://unformidable-tax.000webhostapp.com/courses.php";
        const response = await axios.get(url);
        setData(response.data);
        setLoad(false);
      } catch {
        setLoad(false);
      }
    };
    if (data.length === 0) {
      fetchData();
    }
  }, []);
  // handel show courses
  const HandelCourses = () => {
    if (data.length != 0) {
      return data.map((item) => (
        <Course
          key={item.id}
          image={item.image}
          title={item.title}
          owner={item.owner}
          price={item.price.price_after}
          discount={item.price.price_before}
          numId={item.id}
          type={item.type}
          id={item.id}
        />
      ));
    } else {
      return <h1 className="text-center text-danger">No Data Show</h1>;
    }
  };
  //handel title
  const HandelTitle = () => {
    if (!props.VideoCourse) {
      return `تعلم درس اونلاين`;
    } else {
      return "الدروس المتوفرة";
    }
  };
  //handel data course
  useEffect(() => {
    async function dataCourseById() {
      try {
        const {data} = await Data.datacourse(Courseid);
        if (data.data) {
          setDataCourse(data.data);
          setLoad(false);
        }
      } catch (err) {
        setDataCourse([]);
        setLoad(false);
      }
    }
      dataCourseById();
  }, []);
  //handel show data course
  const HandelDataCourse = () => {
    if (dataCourse.length != 0) {
      return dataCourse.map(
        (
          item //datacourse
        ) => (
          <Course
            CourseVideo
            key={item.id}
            lessonName={item.title}
            time={item.time}
            state={item.state === "free" ? "متاح الان" : "يطلب كود"}
            ImgVideo={item.image}
            Btn={item.state}
            Uid={item.id}
            Cid={Courseid}
          />
        )
      );
    } else {
      return <h1 className="text-center text-danger">No Data Show</h1>;
    }
  };
  // HandelLoad ...
  const HandelLoad = () => {
    return [1, 2, 3, 4].map((i) => (
      <div key={i} className="col-lg-3 col-md-4 col-sm-12">
        <div className="loader mb-4"></div>
      </div>
    ));
  };

  return (
    <section className="course pt-5 pb-5" id="student">
      <div className="container">
        <div className="maintitle mt-5 mb-5">
          <h1 className="adr">{HandelTitle()}</h1>
        </div>
        {!props.VideoCourse ? (
          <div className="row">
            {!load ? HandelCourses() : HandelLoad()}
            <hr />
          </div>
        ) : (
          <div className="row">
            {!load ? HandelDataCourse() : HandelLoad()}
            <hr />
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
