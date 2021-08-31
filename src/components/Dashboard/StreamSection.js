import React from 'react';
import './StreamSection.css';
import stream from '../../videos/video1.mp4';

function StreamSection() {
  return (
    <>
      <div className="stream__container">
        <h3>Video stream.</h3>
        {/* please wait... */}
        <br />
        <video className="video__stream" controls autoPlay>
          <source src={stream} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default StreamSection;
