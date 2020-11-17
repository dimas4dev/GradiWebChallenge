import React from "react";

import Path from "../../assets/images/Path.png";
import Barras from "../../assets/images/Barritas.png";
import ActiveNoiseCancellation from "../../assets/images/ActiveNoiseCancellation.png";
import "../../assets/styles/Icons/Icons.scss";
const Icons = () => {
  return (
    <section className="Icons">
      <article className="Icons__Container">
        <img src={Path} alt="" />
        <p>CUSTOMIZABLE TOUCH CONTROLS</p>
      </article>
      <article className="Icons__Container">
        <img src={ActiveNoiseCancellation} alt="" />
        <p>ACTIVE NOISE CANCELLATION</p>
      </article>
      <article className="Icons__Container">
        <img src={Barras} alt="" />
        <p>BUILT-IN EQUALIZER</p>
      </article>
    </section>
  );
};

export default Icons;
