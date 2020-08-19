import React from 'react';
import skeletonCap from './skeleton-cap.png'

// styling
import '../App.css';


const SampleComp = props => {
  const {switchOn} = props

  const setImgClass = () => {
    const classArr = ["skeletonCap"]
    if (switchOn) classArr.push("skel-on")
    return classArr.join(' ')
  }
  
  return (
    <div className="SampleComp">
        <h1 className="text">hey, what's up</h1>
        <img className={setImgClass()} src={skeletonCap} />
    </div>
  );
}

export default SampleComp;
