import React, { Component } from "react";
import { FormComponent, ImageComponent } from "../Imports/imports";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = event => {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randomNum].url;
    this.setState({ randomImg: randMemeImg });
  };

  render() {
    return (
      <div>
        <FormComponent
          data={this.state}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        ;
        <ImageComponent data={this.state} />
      </div>
    );
  }
}

export default MemeGenerator;
