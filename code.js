

let button = document.getElementById('check');
let resultDiv = document.getElementById('result');

button.addEventListener("click", findMaxAndMin);

function findMaxAndMin() {
    let numbers = document.getElementById('num').value.split(' ');
    let max = numbers[0];
    let min = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }else {
       (numbers[i] < min) 
        min = numbers[i];
      }
    
    }
    resultDiv.innerHTML = `Maximum: ${max} Minimum: ${min}`;
}


