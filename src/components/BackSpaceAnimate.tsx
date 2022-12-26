import React, { useState } from "react";
import Lottie from "lottie-react";
import BackSpace from "../animations/102776-space.json";


const BackSpaceAnimate = () => {
  return (
    <div>
      <Lottie
      style={{position:'absolute', top:'0', width:'100%'}}
        animationData={BackSpace}
        loop
        autoplay
      />
    </div>
  )
}

export default BackSpaceAnimate