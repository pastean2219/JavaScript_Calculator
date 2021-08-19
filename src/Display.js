import React from "react";

class Display extends React.Component {
  render() {
    return <div id={this.props.id}>{this.props.number}</div>;
  }
}
export default Display;
