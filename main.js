document.querySelector('.calc-add').addEventListener('click', function() {
    calculate('add');
});

document.querySelector('.calc-sub').addEventListener('click', function() {
    calculate('sub');
});

document.querySelector('.calc-mul').addEventListener('click', function() {
    calculate('mul');
});

document.querySelector('.calc-div').addEventListener('click', function() {
    calculate('div');
});

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                document.getElementById('result').textContent = 'Cannot divide by zero.';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation.';
    }

    document.getElementById('result').textContent = 'Result: ' + result;
}