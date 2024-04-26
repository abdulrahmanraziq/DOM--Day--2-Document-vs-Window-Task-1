function handleKeyDown(event){
    if (event.key.match(/[0-9]/)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Backspace') {
        backspace();
    } else {
        alert('Only numbers are allowed!');
    }
}

function calculateResult() {
    const expression = document.getElementById('display').value;
    if (expression) {
        try {
            const result = eval(expression);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function clearDisplay(){
    document.getElementById('display').value = '';
}

function backspace(){
   const display = document.getElementById('display');
    if(display.value){
        display.value = display.value.slice(0, -1)
    }
}