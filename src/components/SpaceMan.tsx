import React, { useState } from "react";
import Lottie from "lottie-react";
import Spaceman from "../animations/spaceman.json";

const SpaceMan = () => {
  return (
    <div>
      <Lottie
      className="space-man-lottie"
        animationData={Spaceman}
        loop
        autoplay
      />
    </div>
  )
}

export default SpaceMan