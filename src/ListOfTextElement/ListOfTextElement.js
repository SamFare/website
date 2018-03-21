import React from "react";
import PropTypes from "prop-types";

import TextElement from "../TextElement/TextElement.js";
import InvertedTextElement from "../TextElement/InvertedTextElement.js";

export default class ListOfTextElement extends React.Component{
  
  constructor(props) {
    super(props);
    this.listItems = this.generateJSXElements(props.elements); 
    this.generateJSXElements = this.generateJSXElements.bind(this);
  }

  static get propTypes() { 
    return {
      elements: PropTypes.array,
    };
  }

  generateJSXElements(elementAsJson) {
    let index = 0;
    let elementAsJsx = []; 
    
    for(let jsonElement of elementAsJson) {
      elementAsJsx.push(this.selectCorrectJSXElementToAdd(jsonElement, index));
      ++index;
    }

    return elementAsJsx;
  }

  selectCorrectJSXElementToAdd(jsonElement, index) {
    if(index % 2) {
      return <InvertedTextElement key={index} text={jsonElement.text} img={jsonElement.img}/>;
    }
    return <TextElement key={index} text={jsonElement.text} img={jsonElement.img}/>;
  }

  render(){
    return (
      <div>
        {this.listItems}
      </div>
    );
  } 
}
