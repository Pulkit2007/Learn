// Target Display Elements
const previousOperandEl = document.getElementById('previous-operand');
const currentOperandEl = document.getElementById('current-operand');

// Calculator State
let currentOperand = '0';
let previousOperand = '';
let operation = null;
let shouldResetScreen = false;

// Target Buttons Container for Event Delegation
const buttonsContainer = document.querySelector('.buttons');

buttonsContainer.addEventListener('click', (e) => {
  const target = e.target.closest('.btn');
  if (!target) return;

  const value = target.dataset.val;
  const action = target.dataset.action;

  if (value !== undefined) {
    if (['+', '-', '*', '/', '%'].includes(value)) {
      handleOperator(value);
    } else {
      appendNumber(value);
    }
  } else if (action) {
    handleAction(action);
  }

  updateDisplay();
});

// Appends numbers and handles decimals
function appendNumber(number) {
  if (currentOperand === '0' || shouldResetScreen) {
    if (number === '.') {
      currentOperand = '0.';
    } else {
      currentOperand = number;
    }
    shouldResetScreen = false;
    return;
  }

  // Prevent multiple decimal points
  if (number === '.' && currentOperand.includes('.')) return;

  currentOperand += number;
}

// Handles operator selection (+, -, *, /, %)
function handleOperator(op) {
  if (operation !== null && !shouldResetScreen) {
    calculate();
  }
  
  operation = op;
  previousOperand = currentOperand;
  shouldResetScreen = true;
}

// Handles action buttons (AC, DEL, =)
function handleAction(action) {
  switch (action) {
    case 'clear':
      clear();
      break;
    case 'delete':
      deleteNumber();
      break;
    case 'calculate':
      if (operation !== null && !shouldResetScreen) {
        calculate();
      }
      break;
  }
}

// Core Math Computation
function calculate() {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  let result;
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      return;
  }

  // Round results to prevent floating-point precision issues (e.g., 0.1 + 0.2)
  currentOperand = typeof result === 'number' ? Math.round(result * 1000000) / 1000000 : result;
  operation = null;
  previousOperand = '';
  shouldResetScreen = true;
}

// Reset calculator to default state
function clear() {
  currentOperand = '0';
  previousOperand = '';
  operation = null;
  shouldResetScreen = false;
}

// Remove last entered character
function deleteNumber() {
  if (shouldResetScreen) return;
  if (currentOperand.length === 1 || currentOperand === 'Error') {
    currentOperand = '0';
  } else {
    currentOperand = currentOperand.slice(0, -1);
  }
}

// Display Symbols Mapping
function getOperatorSymbol(op) {
  switch (op) {
    case '/': return '÷';
    case '*': return '×';
    case '-': return '−';
    default: return op;
  }
}

// Sync State to HTML DOM
function updateDisplay() {
  currentOperandEl.textContent = currentOperand;
  if (operation !== null) {
    previousOperandEl.textContent = `${previousOperand} ${getOperatorSymbol(operation)}`;
  } else {
    previousOperandEl.textContent = '';
  }
}