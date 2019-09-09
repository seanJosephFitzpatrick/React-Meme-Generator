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
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={props.bottomText}
          onChange={props.handleChange}
        />
        <button>Generate</button>
      </form>
    </div>
  );
}

export default FormComponent;
