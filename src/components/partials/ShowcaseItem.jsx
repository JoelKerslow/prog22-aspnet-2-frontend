import React from "react";
import ShowcaseImage from "../../assets/images/showcase.png";

const ShowcaseItem = ({ item }) => {
  return (
      <div className="showcase-item">
        <div className="content">
          <div className="title-text">{item.title}</div>
          <div className="offer-text">{item.offer}</div>
        </div>
        <img className="showcase-img" src={ShowcaseImage} alt="A very sexy man" />
      </div>
  );
};

export default ShowcaseItem;
