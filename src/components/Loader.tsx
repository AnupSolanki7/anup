import React, { useState } from "react";
import Lottie from "lottie-react";
import RocketLoader from "../animations/rocket-loader.json";
import { TypeAnimation } from "react-type-animation";

const Loader = () => {
  return (
    <div className="loader-screen">
      <Lottie
        style={{ position: "absolute", width: "250px" }}
        animationData={RocketLoader}
        loop
        autoplay
      />

      <TypeAnimation
        sequence={["Initialize sequence.......", 1500, ""]}
        speed={40}
        deletionSpeed={40}
        wrapper="h2"
        repeat={Infinity}
        style={{position:'absolute', top:'80%'}}
      />
    </div>
  );
};

export default Loader;
