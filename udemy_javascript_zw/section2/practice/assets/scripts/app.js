const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(operation){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if(operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if(operation ==='SUBTRACT'){
    currentResult -= enteredNumber;
    operator = '-';
  } else if(operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else {
    currentResult /= enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));

//결과를 보여주는 (화면을 바꿈) -> 이 함수는 처음 스크립트가 실행될때만 실행된다 -> add함수 내부로 옮기면 이벤트가 일어날때 실행됨
// outputResult(currentResult, '');
