import axios from "axios";
import React, { createContext, useContext } from "react";


const urlCourse = "https://unformidable-tax.000webhostapp.com/course.php";
const urlVideo = "https://unformidable-tax.000webhostapp.com/video.php";
const Data = {
  token: localStorage.getItem("token")||null,
  datacourse: async function data(id) {
    try {
      const getdata = await axios.get(urlCourse, {
        params: { token: Data.token, id: id },
      });
      return getdata;
    } catch (error) {
      throw { state: false, data: "😊" + error.message + "😊" };
    }
  },
  datavideo:async function data(id) {
    try {
      const getdata = await axios.get(urlVideo, {
        params: { token: Data.token, id: id },
      });
      return getdata;
    } catch (error) {
      throw { state: false, data: "😊" + error.message + "😊" };
    }
  },
};

const Context = createContext();

export const GlobalContext = ({ children }) => {
  return <Context.Provider value={Data}>{children}</Context.Provider>;
};
export const useData = () => useContext(Context);
