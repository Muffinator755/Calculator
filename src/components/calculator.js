import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      total: 0,
      operator: ''
    };
    this.handleType = this.handleType.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.getResult = this.getResult.bind(this);
    this.clearInput = this.clearInput.bind(this);

  }

  handleType(e) {
    const value = e.target.attributes.getNamedItem('label').value;

    this.setState((prevState) => {
      const current = (this.state.current == 0 || this.state.current == this.state.total) ? '' : this.state.current;
      return { current: parseInt(current + value) };
    });

  }
  calculate(sign, number) {
    const total = this.state.total;
    console.log(total);
    switch (sign) {
      case "-":
        return total - number;
        break;
      case "+":
        return total + number;
        break;
      case "*":
        return total * number;
        break;
      case "/":
        return total / number;
        break;
      default:
        return 0;
    }
  };

  handleAction(e) {
    const operator = e.target.attributes.getNamedItem('label').value;

    this.setState((prevState) => {
      return {
        total: prevState.current,
        operator: operator,
        current: 0
      }
    });

    console.log(this.state);
  }
  getResult() {
    this.setState({
      current: this.calculate(this.state.operator, this.state.current)
    });
  }
  clearInput() {
    this.setState({ current: 0 });
  }

render() {
  return (
    <div className="calculator">
      <div className="calculator__display">
        <p>{this.state.current}</p>
      </div>
      <div className="calculator__keypad">
        <div className="calculator__keys">
          <div className="caculator__row-one">
            <button className="calculator__button__clear-key" label="C" onClick={this.clearInput} value="clear">CLEAR</button>
            <button className="calculator__button__division-key" label="/" onClick={this.handleAction} value="divide">/</button>
          </div>
          <div className="calculator__row-two">
            <button className="calculator__button__key-7" label="7" onClick={this.handleType} value="7">7</button>
            <button className="calculator__button__key-8" label="8" onClick={this.handleType} value="8">8</button>
            <button className="calculator__button__key-9" label="9" onClick={this.handleType} value="9">9</button>
            <button className="calculator__button__multiplication-key" label="*" onClick={this.handleAction} value="multiple">*</button>
          </div>
          <div className="calculator__row-three">
            <button className="calculator__button__key-4" label="4" onClick={this.handleType} value="4">4</button>
            <button className="calculator__button__key-5" label="5" onClick={this.handleType} value="5">5</button>
            <button className="calculator__button__key-6" label="6" onClick={this.handleType} value="6">6</button>
            <button className="calculator__button__subtraction-key" label="-" onClick={this.handleAction} value="subtract">-</button>
          </div>
          <div className="calculator__row-four">
            <button className="calculator__button__key-1" label="1" onClick={this.handleType} value="1">1</button>
            <button className="calculator__button__key-2" label="2" onClick={this.handleType} value="2">2</button>
            <button className="calculator__button__key-3" label="3" onClick={this.handleType} value="3">3</button>
            <button className="calculator__button__addition-key" label="+" onClick={this.handleAction} value="add">+</button>
          </div>
          <div className="calculator__row-five">
            <button className="calculator__button__key-0" label="0" onClick={this.handleType} value="0">0</button>
            <button className="calculator__button__equals-key" label="=" onClick={this.getResult} value="equal">=</button>
          </div>
        </div>
      </div>
    </div>
  )
}
}
export default Calculator;