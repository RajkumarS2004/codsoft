document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';

    // Event listener for keyboard keydown events
    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (/[0-9]/.test(key)) {
            handleInput(key);
        } else if (key === '.') {
            handleInput(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            handleInput(key);
        } else if (key === '(' || key === ')') {
            handleInput(key);
        } else if (key === '%') {
            handleInput(key);
        } else if (key === 'Backspace') {
            backspace();
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });

    // Event listener for button clicks
    document.querySelectorAll('.keys button').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'C') {
                clearDisplay();
            } else if (buttonText === '⌫') {
                backspace();
            } else if (buttonText === '=') {
                calculate();
            } else {
                handleInput(buttonText);
            }
        });
    });

    // Function to handle input (both click and keyboard)
    function handleInput(value) {
        if (currentInput === 'Error' || currentInput === 'NaN' || currentInput === 'Infinity') {
            console.log('Resetting input due to error state');
            currentInput = '';
            display.value = '';
        }
        currentInput += value;
        display.value = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        display.value = '';
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    }

    function calculate() {
        try {
            currentInput = currentInput.replaceAll('x', '*');
            display.value = eval(currentInput);
        } catch (e) {
            display.value = 'Error';
        }
        currentInput = display.value;
    }

    function isValidInput(key) {
        return /[0-9+\-*\/().%]/.test(key) || (key === '.' && !currentInput.includes('.'));
    }
});
