import React, { useState, useEffect } from "react";
import ShowcaseItem from "./ShowcaseItem";
import { ShowcaseAsync } from "../../Services/ShowcaseServices";

const Showcase = () => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ showcase, setShowcase ] = useState([]);
  
  useEffect(() => {
    const fetchShowcaseAsync = async () => {
      ShowcaseAsync().then((data) =>{
        setShowcase(data)
      });
      console.log(showcase)
    };
    fetchShowcaseAsync();
  }, []);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= showcase.length) {
      newIndex = showcase.length - 1;
    }

    setActiveIndex(newIndex);
  };

      return (
  <div className="carousel">
    <div className="inner" style={{transform: `translate: (-${activeIndex *100})%`}}>
      {showcase.map((item) => {
        return <ShowcaseItem key={item.id} item={item} />
      })}
    </div>
    <div className="carousel-buttons">
      <button className="button-arrow" onClick={()=>{updateIndex(activeIndex -1)}}>Tillbaka</button>
      <div className="indicators">
        {showcase.map((item, index) => {
          return (
            <button key={index}  className="indicator-button">*</button>
            )
          })}
      </div>
      <button className="button-arrow" onClick={()=>{updateIndex()}}>Framåt</button>
    </div>
  </div>
  );
};

export default Showcase;
