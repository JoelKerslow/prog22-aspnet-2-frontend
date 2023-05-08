import React from "react";
import ShowcaseImage from "../../assets/images/showcase.png";

const ShowcaseItem = ({ item }) => {
  return (
      <div className="carousel-item">
        <div className="content">
          <div className="title-1">{item.title}</div>
          <div className="title-1">{item.offer}</div>
        </div>
        <img className="showcase-img" src={ShowcaseImage} alt="A very sexy man" />
      </div>
  );
};

export default ShowcaseItem;
