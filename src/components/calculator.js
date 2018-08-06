import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator__display">0
        <div className="calculator__keypad">
            <div className="calculator__keys">
              <div classname="caculator__function-keys">
                <button className="calculator__button__clear-key" label="C" value="clear">AC</button>
                <button className="calculator__button__negative-key" label="+/-" value="negative">+/-</button>
                <button className="calculator__button__percentage-key" label="%" value="percentage">%</button>
              </div>
              <div className="calculator__digit-keys">
                <button className="calculator__button__key-1" label="1" value="1">1</button>
                <button className="calculator__button__key-2" label="2" value="2">2</button>
                <button className="calculator__button__key-3" label="3" value="3">3</button>
                <button className="calculator__button__key-4" label="4" value="4">4</button>
                <button className="calculator__button__key-5" label="5" value="5">5</button>
                <button className="calculator__button__key-6" label="6" value="6">6</button>
                <button className="calculator__button__key-7" label="7" value="7">7</button>
                <button className="calculator__button__key-8" label="8" value="8">8</button>
                <button className="calculator__button__key-9" label="9" value="9">9</button>
                <button className="calculator__button__key-0" label="0" value="0">0</button>
                <button className="calculator__button__key-dot" label="." value=".">.</button>
              </div>
              <div className="calculator__operator-keys">
                <button className="calculator__button__division-key" label="÷" value="divide">÷</button>
                <button className="calculator__button__multiplication-key" label="x" value="multiple">x</button>
                <button className="calculator__button__subtraction-key" label="-" value="subtract">-</button>
                <button className="calculator__button__addition-key" label="+" value="add">+</button>
                <button className="calculator__button__equals-key" label="=" value="equal">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
