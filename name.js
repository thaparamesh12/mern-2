// Error Message Function
function displayError(msg) {
    resultText.innerHTML = msg;
    };
    
    // Result Function
    function displayResult([firstNumber, lastNumber], result) {
      resultText.innerHTML = 'The result is : <span id="user-result">' + result + '</span>';
    } 
    
    // Validating inputs
    function validateInputs() {
      let errorMsg = "";
      const firstNumber = parseFloat(document.getElementById("first-number").value);
      const lastNumber = parseFloat(document.getElementById("second-number").value);
      if (isNaN(firstNumber) || isNaN(lastNumber)) {
        errorMsg = "Input values should be numbers and not empty.";
      } return {
        values: [firstNumber, lastNumber],
        errorMsg
      };
    }
    
    // Calclation Functions
    function addition([num1, num2]){
        return num1 + num2;
    }
    
    function subtraction([num1, num2]){
        return num1 - num2;
    }
    
    function multiply([num1, num2]){
        return num1 * num2;
    }
    
    function divide([num1, num2]){
        return num1 / num2;
    }
    
    // Main Function //
    const btnAdd = document.getElementById("add");
    const btnSub = document.getElementById("subtract");
    const btnMult = document.getElementById("multiply");
    const btnDiv = document.getElementById("divide");
    
    const buttons = [btnAdd, btnSub, btnMult, btnDiv];
    const resultText = document.getElementById("result-placeholder");
    
    for(let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener("click", function(){
        const { errorMsg, values } = validateInputs();
        if (errorMsg) {
          displayError(errorMsg);
          resultText.style.color = "aqua";
        }else{
          const results = [addition(values), subtraction(values), multiply(values), divide(values)];
          const result = results[i];
          displayResult(values, result);
          resultText.style.color = "white";
        }
      });
    }