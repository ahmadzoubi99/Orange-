var operation;
var num1;
var num2;


function calculate(){
  operation=prompt("Enter the operation (+, -, *, /) ");
  num1=prompt("Enter the first number");
  num2=prompt("Enter the second number");

  let result;
  if(operation=='+')
    result=num1+num2;
  else if(operation=='-')
    result=num1+num2;
  else if(operation=='*')
    result=num1*num2;
  else if(operation=='/'&&num2!=0)
    result=num1/num2;
  else
  result="Invalid operation";
  document.write(`operation: ${num1} ${operation} ${num2} = ${result}`);

}

calculate();