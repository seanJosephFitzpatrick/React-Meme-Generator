import React from "react";

function FormComponent(props) {
  return (
    <div>
      <form className="meme-form">
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={props.topText}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={props.bottomText}
        />
        <button>Generate</button>
      </form>
    </div>
  );
}

export default FormComponent;
