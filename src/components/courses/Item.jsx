import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faRocket, faSignIn, faTv } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../GlobalContext/GlobalContext";
const Item = (props) => {
  const Data = useData()
  const HandelDataVideo = ()=>{
    if(props.type){
      return(props.type)
    }else{
      return(props.state)
    }
  }
  const HandelImage = () =>{
    if(props.image){
      return props.image
    }else{
      return props.ImgVideo
    }
  }
  const HandelTitle = () =>{
    if(props.title){
      return `${props.title}`
    }else{
      return props.lessonName
    }
  }
  const HandelStyleTitle=()=>{
    if(!props.title){
      return {WebkitLineClamp:3,height:'70px'}
    }
  }
  const HandelStyleNum=()=>{
    if(!props.title){
      return {height:'90px'}
    }
  }
  const HandelPrag = () =>{
    if(props.numId){
      return `المعرف الخاص: __${props.numId}__`
    }else{
      return ``
    }
  }
  const HnadelUrl=()=>{
    if(props.Btn==='free'){
      return('/course/'+props.Cid+'/'+props.Uid)
    }else{
      return('/code/'+props.Cid)
    }
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className={`box ${props.Btn!=='free'?'':'active'}`} data-video={HandelDataVideo()}>
        <div className="img">
          <img src={HandelImage()} className="img-fluid" loading="lazy"/>
        </div>
        <div className="title">
          <h5 style={HandelStyleTitle()}>{HandelTitle()}</h5>
        </div>
        <div className="num" style={HandelStyleNum()}>
          <p>{HandelPrag()}</p>
          <p>{props.time?`التاريخ : ${props.time}`:`المالك : ${props.owner}`}</p>
          {props.price&&<p>السعر : {props.discount&&<span><del>{props.discount}ج.م</del></span>} {props.price}ج.م</p>}
        </div>
        <div className="view">
          {Data.token?props.CourseVideo?<Link to={HnadelUrl()}>{props.Btn!=='free'?<><FontAwesomeIcon icon={faLock}/> {HandelDataVideo()}</>:<><FontAwesomeIcon icon={faTv}/> مشاهدة</>}</Link>:<Link to={`/course/${props.id}`}><FontAwesomeIcon icon={faRocket}/> انطلق</Link>:<Link to={`/login`}><FontAwesomeIcon icon={faSignIn}/> سجل الان</Link>}
        </div>
      </div>
    </div>
  );
};

export default Item;
