import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prev: [],
      total: []
    };
  }

  inputDigit(int) {
    var newArr = this.state.total.slice();
    newArr.push(int);
    this.setState({ total: newArr });
  }

  addition(prevNum) {
    var store = this.arrToNumber(prevNum);
    var newArr = this.state.prev.slice();
    newArr.push(store, "+");
    var string = newArr.join("");
    this.setState({
      total: [], prev: [string]
    });

    return prevNum;

  }

  minus(prevNum) {
    var store = this.arrToNumber(prevNum);
    var newArr = this.state.prev.slice();
    newArr.push(store, "-");
    var string = newArr.join("");
    this.setState({ total: [], prev: [string] });

    return prevNum;

  }

  divide(prevNum) {
    var store = this.arrToNumber(prevNum);
    var newArr = this.state.prev.slice();
    newArr.push(store, "÷");
    var string = newArr.join("");
    this.setState({ total: [], prev: [string] });

    return prevNum;

  }

  multiply(prevNum) {
    var store = this.arrToNumber(prevNum);
    var newArr = this.state.prev.slice();
    newArr.push(store, "x");
    var string = newArr.join("");
    this.setState({ total: [], prev: [string] });

    return prevNum;

  }

  clearInput() {
    this.setState({ total: [], prev: [] });
  }

  sum(currNum) {
    var store = this.arrToNumber(currNum); 
    var newArr = this.state.prev.slice();
    newArr.push(store);
    console.log(newArr.join(""));
    var sum = eval(newArr.join[""]);

    this.setState({ total: [sum] });

  }

  arrToNumber(arr) {
    var test = Number(arr.join(""));

    return test;

  }

  makePretty(num) {
    var newNum = this.arrToNumber(num);
    var formatNum = newNum.toLocaleString();

    return formatNum;
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator__display">
          <p>{this.makePretty(this.state.total)}</p>
        </div>
        <div className="calculator__keypad">
          <div className="calculator__keys">
            <div className="caculator__row-one">
              <button className="calculator__button__clear-key" onClick={() => this.clearInput()} label="C" value="clear">CLEAR</button>
              <button className="calculator__button__division-key" onClick={() => this.divide(this.state.total)} label="÷" value="divide">÷</button>
            </div>
            <div className="calculator__row-two">
              <button className="calculator__button__key-7" onClick={() => this.inputDigit(7)} label="7" value="7">7</button>
              <button className="calculator__button__key-8" onClick={() => this.inputDigit(8)} label="8" value="8">8</button>
              <button className="calculator__button__key-9" onClick={() => this.inputDigit(9)} label="9" value="9">9</button>
              <button className="calculator__button__multiplication-key" onClick={() => this.multiply(this.state.total)} label="x" value="multiple">x</button>
            </div>
            <div className="calculator__row-three">
              <button className="calculator__button__key-4" onClick={() => this.inputDigit(4)} label="4" value="4">4</button>
              <button className="calculator__button__key-5" onClick={() => this.inputDigit(5)} label="5" value="5">5</button>
              <button className="calculator__button__key-6" onClick={() => this.inputDigit(6)} label="6" value="6">6</button>
              <button className="calculator__button__subtraction-key" onClick={() => this.minus(this.state.total)} label="-" value="subtract">-</button>
            </div>
            <div className="calculator__row-four">
              <button className="calculator__button__key-1" onClick={() => this.inputDigit(1)} label="1" value="1">1</button>
              <button className="calculator__button__key-2" onClick={() => this.inputDigit(2)} label="2" value="2">2</button>
              <button className="calculator__button__key-3" onClick={() => this.inputDigit(3)} label="3" value="3">3</button>
              <button className="calculator__button__addition-key" onClick={() => this.addition(this.state.total)} label="+" value="add">+</button>
            </div>
            <div className="calculator__row-five">
              <button className="calculator__button__key-0" onClick={() => this.inputDigit(0)} label="0" value="0">0</button>
              <button className="calculator__button__equals-key" onClick={() => this.sum(this.state.total)} label="=" value="equal">=</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Calculator;