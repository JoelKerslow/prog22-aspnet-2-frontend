import React from 'react'
import ShowcaseImage from "../../assets/images/showcase.png";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <div className="content">
          <div className="title-1">Welcome to Manero</div>
          <div className="title-2">50% off</div>
        </div>
        <img src={ShowcaseImage} alt="A very sexy man" />
      </div>
    </section>
  );
};

export default Showcase;
