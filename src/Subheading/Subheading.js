import React from "react";
import PropTypes from "prop-types";

import css from "./Subheading.css";

export default class Subheading extends React.Component{
  constructor(props) {
    super(props);
  }

  static get propTypes() {
    return {
      text: PropTypes.string
    };
  }
  render(){
    return (  
      <div className={css.header}>  
        <p> {this.props.text} </p>
      </div>
    );
  }
}