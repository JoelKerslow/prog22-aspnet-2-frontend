import React from 'react'

const Showcase = (props) => {
  return (
    <section className="schowcase">
      <div className="container">
        <div className="content">
          <div className="title-1">{props.offer}</div>
          <div className="title-2">{props.description}</div>
        </div>
      </div>
    </section>
  );
}

export default Showcase
