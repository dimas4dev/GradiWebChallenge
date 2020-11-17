import React from "react";
import PrincipalImage from "../../assets/images/KitAudiComple320px.png";
import Image1 from "../../assets/images/IconoKitCompletito.png";
import Image2 from "../../assets/images/BigMomenturm.png";
import Image3 from "../../assets/images/IconodesarmadoAudi320.png";
import "../../assets/styles/ContainerImages/ContainerImages.scss";

const ContainerImages = () => {
  return (
    <section className="ImgContainers">
      <article className="PrincipalImage ">
        <img src={PrincipalImage} alt="" />
      </article>
      <article className="Carousel">
        <div className="Carousel__Img">
          <img src={Image1} alt="" />
        </div>
        <div className="Carousel__Img">
          <img src={Image2} alt="" />
        </div>
        <div className="Carousel__Img">
          <img src={Image3} alt="" />
        </div>
      </article>
    </section>
  );
};

export default ContainerImages;
