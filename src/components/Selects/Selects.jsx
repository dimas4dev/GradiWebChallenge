import React from "react";
import "../../assets/styles/Selects/Selects.scss";
const Selects = () => {
  return (
    <section className="Select">
      <article>
        <p className="Titles">Choose your finish.</p>
        <div className="Borded--Containers">
          <p className="subtitles">Ivory White</p>
          <p className="text">
            For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True.
          </p>
        </div>
        <div className="Borded--Containers">
          <p className="subtitles"> Matte Black</p>
          <p className="text">
            Of all of the celestial bodies that capture our attention and
            fascination as astronomers.
          </p>
        </div>
      </article>
      <article>
        <p className="Titles">Would you like to add extended.</p>
        <div className="Borded--Containers">
          <p className="subtitles">2 years coverage</p>
          <p className="text">
            For the past 75 years, Sennheiser has put sound first.
          </p>
        </div>
        <div className="Borded--Containers">
          <p className="subtitles">3 years coverage</p>
          <p>For the past 75 years, Sennheiser has put sound first.</p>
        </div>
      </article>
      <article>
        <p className="Titles">Features</p>
        <div className="Borded--Containers">
          <p className="subtitles">Voice Assistant support</p>
        </div>
        <div className="Borded--Containers">
          <p className="subtitles">Customizable controls</p>
        </div>
      </article>
      <article>
        <div className="Border--Inferior">
          <p className="Titles">Specifications</p>
        </div>
        <div className="Border--Inferior">
          <p className="subtitles">Dimensions</p>
          <p className="subtitles">
            76.8 x 43.8 x 34.7 mm (earbuds and charging case)
          </p>
        </div>
        <div className="Border--Inferior">
          <p className="subtitles">USB Standandard</p>
          <p className="subtitles">USB-C</p>
        </div>
        <div className="Border--Inferior">
          <p className="subtitles">Power supply</p>
          <p className="subtitles">Sennheiser 7mm dynamic driver</p>
        </div>
        <div className="Border--Inferior">
          <p className="subtitles">Frequency response (Microphone)</p>
          <p className="subtitles">100 Hz to 10 kHz</p>
        </div>
        <div className="Border--Inferior">
          <p className="subtitles">Frequency response</p>
          <p className="subtitles">5 - 21,000 Hz</p>
        </div>
        <div className="Border--Inferior">
          <p className="subtitles">Noise cancellation</p>
          <p className="subtitles">Single-Mic ANC per earbud side</p>
        </div>
      </article>
    </section>
  );
};

export default Selects;
