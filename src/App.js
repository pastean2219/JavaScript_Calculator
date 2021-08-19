import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Display from "./Display";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "0",
      operator: false,
      decimal: false,
      minusVal: false,
    };
  }

  onButtonPressed = (button) => {
    var number = this.state.number;
    switch (true) {
      case button === "0" ||
        button === "1" ||
        button === "2" ||
        button === "3" ||
        button === "4" ||
        button === "5" ||
        button === "6" ||
        button === "7" ||
        button === "8" ||
        button === "9":
        if (this.state.number !== "0") {
          number += button;
        } else {
          number = button;
        }

        this.setState({ number, operator: false });

        break;

      case button === "*" || button === "/" || button === "-" || button === "+":
        if (!this.state.operator) {
          number += button;
          this.setState({ operator: true, decimal: false });
        } else {
          if (button !== "-") {
            if (this.state.minusVal) {
              let newNumber = number.slice(0, number.length - 2);
              newNumber += button;
              number = newNumber;
            } else {
              let newNumber = number.slice(0, number.length - 1);
              newNumber += button;
              number = newNumber;
            }
          } else {
            if (!this.state.minusVal) {
              number += button;
              this.setState({ minusVal: true });
              console.log("hello");
            }
          }
        }
        this.setState({ number });
        break;
      case button === ".":
        if (!this.state.decimal) {
          number += button;
          this.setState({ number, decimal: true });
        }
        break;
      case button === "=":
        number = eval(number);
        this.setState({ number });
        break;
      case button === "C":
        number = "0";
        this.setState({
          number,
          operator: false,
          decimal: false,
          minusVal: false,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <div id="calcGrid">
          <Display id="display" number={this.state.number} />
          <Button id="zero" button="0" onButtonPressed={this.onButtonPressed} />
          <Button id="one" button="1" onButtonPressed={this.onButtonPressed} />
          <Button id="two" button="2" onButtonPressed={this.onButtonPressed} />
          <Button
            id="three"
            button="3"
            onButtonPressed={this.onButtonPressed}
          />
          <Button id="four" button="4" onButtonPressed={this.onButtonPressed} />
          <Button id="five" button="5" onButtonPressed={this.onButtonPressed} />
          <Button id="six" button="6" onButtonPressed={this.onButtonPressed} />
          <Button
            id="seven"
            button="7"
            onButtonPressed={this.onButtonPressed}
          />
          <Button
            id="eight"
            button="8"
            onButtonPressed={this.onButtonPressed}
          />
          <Button id="nine" button="9" onButtonPressed={this.onButtonPressed} />
          <Button
            id="clear"
            button="C"
            onButtonPressed={this.onButtonPressed}
          />
          <Button
            id="equals"
            button="="
            onButtonPressed={this.onButtonPressed}
          />
          <Button
            id="decimal"
            button="."
            onButtonPressed={this.onButtonPressed}
          />
          <Button id="add" button="+" onButtonPressed={this.onButtonPressed} />
          <Button
            id="subtract"
            button="-"
            onButtonPressed={this.onButtonPressed}
          />
          <Button
            id="multiply"
            button="*"
            onButtonPressed={this.onButtonPressed}
          />
          <Button
            id="divide"
            button="/"
            onButtonPressed={this.onButtonPressed}
          />
        </div>
      </div>
    );
  }
}
export default App;
