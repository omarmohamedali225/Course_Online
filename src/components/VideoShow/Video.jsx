import React, { useEffect, useState } from "react";
import './Video.css'
import { Player } from "video-react";
// import video from '../../images/video.mp4'
import { useParams } from "react-router-dom";
import { useData } from "../GlobalContext/GlobalContext";
const Video = () => {
  const {id} = useParams()
  const Data = useData()
  const [video,setVideo] = useState('')
  const [state,setState] = useState(true)
  const [title,setTitle] = useState('جاري تحميل البيانات...')

  useEffect(() => {
    async function dataVideoById() {
      try {
        const res = await Data.datavideo(id);
        if(res.data.state){
          setVideo(res.data.video)
          setTitle(res.data.title)
          setState(true)
        }else{
          setVideo(res.data.video)
          setState(false)
        }
      } catch (err) {
        throw{state:false};
      }
    }
    dataVideoById();
  }, []);

  return (
    <section className="videos pt-5 pb-5" id="video">
      <div className="container">
        <div className="maintitle mt-5 mb-5">
          <h1 className="adr fs-5">{title}</h1>
        </div>
        <div className="row">
          <div className="col">
            {
              state?<Player src={video}></Player>:<h1 className="text-center fs-6 text-danger">الفيديو غير متاح لك اشترك الان</h1>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
