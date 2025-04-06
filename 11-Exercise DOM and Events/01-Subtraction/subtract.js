function subtract() {
    
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);

    let result = num1 - num2;

    let resultDiv = document.getElementById("result");
    resultDiv.textContent = result
} 