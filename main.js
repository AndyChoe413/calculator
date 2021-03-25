
//Queries
const number = document.querySelectorAll('.number')
const decimal = document.querySelector('.decimal')

//non-number queries
const equals = document.querySelector('.equals')
const operator = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const display = document.querySelector('.display')

//Result containers
let firstNumber = ''
let secondNumber = ''
let operation = ''

//Number handler
for (const num of number) {
    num.addEventListener('click', () => {
        if (operation === '') {
            firstNumber += num.innerText
        updateDisplay()
        } else {
            secondNumber += num.innerText
            updateDisplay()
        }
        

    })
}

//Operator handler
for (const operand of operator) {
    operand.addEventListener('click', () => {
        if (firstNumber !== '') {
            display.innerText = firstNumber + operand.innerText;
            operation = operand.textContent;
            console.log(operation);
        }       
    })
}

//updated display with keystrokes
function updateDisplay() {
    if (firstNumber !== '' && secondNumber === '' && operator === '')
        display.textContent = firstNumber;
    if (firstNumber !== '' && secondNumber === '' && operator !== '')
        display.textContent = firstNumber + operation;
    if (firstNumber !== '' && secondNumber !== '' && operator !== '')
        display.textContent = firstNumber + operation + secondNumber
}

//Calculation handler
equals.addEventListener('click', () => {
    let a = Number(firstNumber)
    let b = Number(secondNumber)

    if (operation == '+') updateDisplay(operation);
    if (operation == '-')  updateDisplay(operation);
    if (operation == '*')  updateDisplay(operation);
    if (operation == '÷')  updateDisplay(operation);
}) 

//clear display 
clear.addEventListener('click', () => {
    display.innerText = ''
    firstNumber = ''
    secondNumber = ''
    operation = ''
})

