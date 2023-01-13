import React, { useState } from "react";
import Lottie from "lottie-react";
import PdfAni from "../animations/pdf.json";

const Pdf = () => {
  return (
    <div >
      <Lottie
        style={{ width: "30px" }}
        animationData={PdfAni}
        loop
        autoplay
      />
      PDF
    </div>
  )
}

export default Pdf