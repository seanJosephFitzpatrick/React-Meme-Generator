import React from "react";

function ImageComponent(props) {
  console.log(props);
  return (
    <div className="meme">
      <img src={props.data.randomImg} alt="randomImg" />
      <h2 className="top">{props.data.topText}</h2>
      <h2 className="bottom">{props.data.bottomText}</h2>
    </div>
  );
}

export default ImageComponent;
