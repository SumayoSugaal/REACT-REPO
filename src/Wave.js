import React from 'react';
//import './Art.css';
//import './side2.css';
import './Wave.css';
//import IMg1 from './image/sid1.jpeg';
//import IMg2 from './image/round.jpeg';
// /import IMg3 from './image/side.jpeg';
//import IMg4 from './image/side4.jpeg';
//import IMg5 from './image/side3.jpeg';
//import IMg6 from './image/side2.jpeg';

const Wave = () => {
  return (
<>
  <div className="header">
    {/*Content before waves*/}
    <div className="inner-header flex">
      {/*Just the logo.. Don't mind this*/}
      
      <h1>Sumayo Sugaal </h1>
    </div>
    {/*Waves Container*/}
    <div>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={0}
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={3}
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x={48}
            y={5}
            fill="rgba(255,255,255,0.3)"
          />
          <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
        </g>
      </svg>
    </div>
    {/*Waves end*/}
  </div>
  {/*Header ends*/}
  {/*Content starts*/}
  <div className="content flex">
    <p>2021</p>
  </div>
</>

    )
}

export default Wave;