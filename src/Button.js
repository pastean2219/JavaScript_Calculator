import React from "react";

class Button extends React.Component {
  runParentHandleClick = () => {
    this.props.onButtonPressed(this.props.button);
  };
  render() {
    return (
      <button
        id={this.props.id}
        onClick={this.runParentHandleClick}
        className="button"
      >
        {this.props.button}
      </button>
    );
  }
}
export default Button;
