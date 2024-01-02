import React, { useState } from "react";
import "./Calculator.css";

enum Operator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/",
}

const Calculator = () => {
  const [number, setNumber] = useState("");
  const [chosenOperator, setChosenOperator] = useState<Operator>(Operator.ADD);
  const [previousNumber, setPreviousNumber] = useState<string>("");
  const handleUpdate = (newNumber: string) => {
    setNumber(number + newNumber);
  };

  const handleChosenOperator = (operator: Operator) => {
    console.log(operator);
    setChosenOperator(operator);
    setPreviousNumber(number);
    setNumber("");
  };

  const handleCalculate = () => {
    let result = 0;
    switch (chosenOperator) {
      case Operator.ADD:
        result = parseInt(previousNumber) + parseInt(number);
        break;
      case Operator.SUBTRACT:
        result = parseInt(previousNumber) - parseInt(number);
        break;
      case Operator.MULTIPLY:
        result = parseInt(previousNumber) * parseInt(number);
        break;
      case Operator.DIVIDE:
        result = parseInt(previousNumber) / parseInt(number);
        break;
    }
    setNumber(result.toString());
    setPreviousNumber("");
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        className={"Cool-input"}
        type="number"
        placeholder={number}
        pattern="[0-9]*"
        inputMode="numeric"
        readOnly={true}
      />
      <div className="Calculator-buttons">
        <span>
          <NumberButton number="1" onUpdate={handleUpdate} />
          <NumberButton number="2" onUpdate={handleUpdate} />
          <NumberButton number="3" onUpdate={handleUpdate} />
          <OperatorButton
            operator={Operator.ADD}
            onUpdate={handleChosenOperator}
          />
        </span>
        <span>
          <NumberButton number={"4"} onUpdate={handleUpdate} />
          <NumberButton number={"5"} onUpdate={handleUpdate} />
          <NumberButton number={"6"} onUpdate={handleUpdate} />
          <OperatorButton
            operator={Operator.SUBTRACT}
            onUpdate={handleChosenOperator}
          />
        </span>
        <span>
          <NumberButton number={"7"} onUpdate={handleUpdate} />
          <NumberButton number={"8"} onUpdate={handleUpdate} />
          <NumberButton number={"9"} onUpdate={handleUpdate} />
          <OperatorButton
            operator={Operator.MULTIPLY}
            onUpdate={handleChosenOperator}
          />
        </span>
        <span>
          <NumberButton number={"0"} onUpdate={handleUpdate} />
          <OperatorButton
            operator={Operator.DIVIDE}
            onUpdate={handleChosenOperator}
          />
          <CalculateButton
            firstOperand={previousNumber}
            chosenOperator={chosenOperator}
            secondOperand={number}
            onUpdate={handleCalculate}
          />
        </span>
      </div>
    </div>
  );
};

/**
 * This is a component that represents a button with a number on it.
 * @param props The props for this component.
 * @constructor The constructor for this component.
 */
const NumberButton = (props: {
  number: string;
  onUpdate: (number: string) => void;
}) => {
  let number = props.number;
  let onUpdate = props.onUpdate;
  return (
    <button
      onClick={() => {
        onUpdate(number);
      }}
    >
      {number}
    </button>
  );
};

const OperatorButton = (props: {
  operator: Operator;
  onUpdate: (operator: Operator) => void;
}) => {
  let operator = props.operator;
  let onUpdate = props.onUpdate;
  return (
    <button
      onClick={() => {
        onUpdate(operator);
      }}
    >
      {operator}
    </button>
  );
};

const CalculateButton = (props: {
  firstOperand: string;
  chosenOperator: Operator;
  secondOperand: string;
  onUpdate: () => void;
}) => {
  let disabled = props.firstOperand === "" || props.secondOperand === "";
  return <button onClick={() => props.onUpdate()}>=</button>;
};

export default Calculator;
