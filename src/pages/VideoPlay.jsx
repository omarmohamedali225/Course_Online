import React from "react";
import Video from "../components/VideoShow/Video";
import logo from "../images/icon_site.png";
import { Helmet } from "react-helmet";
const VideoPlay = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Play Course</title>
        <link rel="icon" href={logo} />
      </Helmet>
      <Video />
    </>
  );
};

export default VideoPlay;
