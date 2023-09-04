import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/video-react/dist/video-react.css";
import "./index.css";
import { Helmet } from "react-helmet";
import logo from './images/icon_site.png'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Course Online</title>
      <link rel="icon" href={logo} />
    </Helmet>
    <App />
  </React.Fragment>
);
