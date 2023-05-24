// import React, { useRef } from "react";
import "./Video.css";

const Video = () => {
//   const videoRef = useRef(null);
//   const playVideo = () => {
//     videoRef.current.play();
//   };
//   const pauseVideo = () => {
//     videoRef.current.pause();
//   };
  return (
    <>
      <div className="text-center mt-5">
        <video
          // ref={videoRef}
          className="size vid shadow"
          // onMouseEnter={playVideo}
          // onMouseLeave={pauseVideo}
        >
          <source src="./images/video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};
export default Video;
