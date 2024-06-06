function calculateBMI(){
    const weight = parseFloat(document.getElementById('weight'))
}


function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid weight and height values.";
        return;
    }

    const bmi = weight / (height * height);
    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}, which is considered ${category}.`;
}

function leap_year_checker(){
    let year=parseInt(prompt("enter year to check if leap or not"))
    if(isNaN (year)){
        document.getElementById('result1').innerText= `the year ${year} :is not leap year`
        document.getElementById('result').innerText=`please ented a valid year`
    }
    else{
        if((year%4===0&&year!==100)||year%400===0){
            document.getElementById('result').innerText = `the year ${year} : is leap year.`;
        }
        else{
            document.getElementById('result1').innerText= `the year ${year} :is not leap year`
        }
    }
  
    
}

function Grade_Classification_with_Bonus(){
    let score=parseFloat(prompt("enter your exam score:"));
    let result;
    if(isNaN(score)||score<0||score>100){
        result="please enter a valid score bettween 0 and 100."

    }else{
        if(score>45){
            let bonusComplted=confirm("Did you complete any bonus assignments? ")
            if(bonusComplted){
                score+=5;
                if(score>100){
                    score=100;
                }
            }
        }
    }
    let grade;
    if(score>=90){
        grade="A";
    }else if(score>=80){
        grade="B";
    }    else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
    document.getElementById('result3').innerText=`your grade is ${grade}`
}
// ----------------------------------------------------
// -----------------------------task 4----------------

function Number_Comparison(){
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let num3 = parseFloat(prompt("Enter the third number:"));
    let result;
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        result = "Please enter valid numbers.";
    } else {
        let largest;
        if (num1 >= num2) {
            if (num1 >= num3) {
                largest = num1;
            } else {
                largest = num3;
            }
        } else {
            if (num2 >= num3) {
                largest = num2;
            } else {
                largest = num3;
            }
        }
        if (largest > 0) {
            result = `The largest number is ${largest}, which is positive.`;
        } else if (largest < 0) {
            result = `The largest number is ${largest}, which is negative.`;
        } else {
            result = `The largest number is ${largest}, which is zero.`;
        }
    }

    document.getElementById('result4').innerText = result;
} 

// --------------------------task5-------------------
function ATM_Withdrawal_Simulation() {
    let balance = parseFloat(prompt("Enter your current balance:"));
    let withdrawalAmount = parseFloat(prompt("Enter the withdrawal amount:"));
    let result;
    if (isNaN(balance) || balance < 0) {
        result = "Please enter a valid current balance.";
    } else if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        result = "Please enter a valid withdrawal amount greater than zero.";
    } else {
        if (withdrawalAmount <= balance) {
            balance -= withdrawalAmount;
            result = `Withdrawal successful. Your new balance is $${balance.toFixed(1)}.`;
        } else {
            result = "Error: Insufficient funds.";
        }
    }

    document.getElementById('result5').innerText = result;
}

// ---------------------------task6----------------

function Temperature_Conversion() {
    let celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
    let result;

    if (isNaN(celsius)) {
        result = "Please enter a valid temperature.";
    } else {
        let fahrenheit = celsius * 9 / 5 + 32;
        if (celsius < 0) {
            result = `The temperature is ${fahrenheit.toFixed(2)}°F (below freezing).`;
        } else if (celsius >= 0 && celsius <= 100) {
            result = `The temperature is ${fahrenheit.toFixed(2)}°F (normal).`;
        } else {
            result = `The temperature is ${fahrenheit.toFixed(2)}°F (above boiling).`;
        }
    }

    document.getElementById('result6').innerText = result;
}

// ------------------------------------task7-------------
function Shopping_Cart_Discount() {
    let totalAmount = parseFloat(prompt("Enter the total amount of your shopping cart:"));
    let result;
    if (isNaN(totalAmount) || totalAmount < 0) {
        result = "Please enter a valid total amount.";
    } else {
        let discount = 0;
        if (totalAmount > 200) {
            discount = 0.2; 
        } else if (totalAmount > 100) {
            discount = 0.1; 
        }
        let discountedAmount = totalAmount - (totalAmount * discount);
        result = `Your discounted total amount is $${discountedAmount.toFixed(2)}.`;
    }
    document.getElementById('result7').innerText = result;
}
// ------------------------------task8-------------


// ----------------------------------task9------------
function Simple_Calculator(){
    let num1 = parseFloat(prompt("please enter first number"));
    let num2 = parseFloat(prompt("please enter second number"));
    let operation=prompt("please enter operation + - / *");
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
        document.getElementById('result9').innerText=`${result}`
        return;
    } else if (num2 === 0 && operation === '/') {
        result = "Error: Division by zero.";
        document.getElementById('result9').innerText=`${result}`
        return;
    } else{
        if(operation=='+')
            {
                result=num1+num2;
            }
            if(operation=='-')
                {
                    result=num1-num2;
                }
                if(operation=='*')
                    {
                        result=num1*num2;
                    }
                    if(operation=='/')
                        {
                            result=num1/num2;
                        }
                            
                        document.getElementById('result9').innerText=` ${num1} ${operation} ${num2} = ${result}`

    }

}


// --------------------task10--------------
function LibraryBookLoanSystem() {
    let userType = prompt("Enter your user type (student or teacher):").toLowerCase();
    let numBooks = parseInt(prompt("Enter the number of books you want to borrow:"));
    let loanApproved;
    if (userType === 'student') {
        if (numBooks <= 3 && numBooks > 0) {
            loanApproved = true;
        } else {
            loanApproved = false;
        }
    } else if (userType === 'teacher') {
        if (numBooks <= 5 && numBooks > 0) {
            loanApproved = true;
        } else {
            loanApproved = false;
        }
    } else {
        loanApproved = false;
    }

    if (loanApproved) {
        alert("Loan approved! You can borrow the requested number of books.");
    } else {
        alert("Loan not approved. Please check the borrowing limits for your user type.");
    }
}


// ------------------------------task11---------------

function AgeandNationalityChecker() {
    let age = parseInt(prompt("Enter your age:"));
    let nationality = prompt("Enter your nationality:").toLowerCase();
    let message;
    if (age >= 18) {
        if (nationality === 'american') {
            message = "You are eligible to vote.";
        } else {
            message = "You are not eligible to vote because you are not American.";
        }
    } else {
        message = "You are not eligible to vote because you are under 18 years old.";
    }
    alert(message);
}

// -------------task12---------------
function temperatureAlert() {
    let temperature = parseFloat(prompt("Enter the temperature in Celsius:"));
    let message;
    if (isNaN(temperature)) {
        message = "Please enter a valid temperature.";
    } else {
        if (temperature < 0) {
            message = "Very Cold: The temperature is below 0°C.";
        } else if (temperature >= 0 && temperature <= 15) {
            message = "Cold: The temperature is between 0°C and 15°C.";
        } else if (temperature >= 16 && temperature <= 25) {
            message = "Warm: The temperature is between 16°C and 25°C.";
        } else {
            message = "Hot: The temperature is above 25°C.";
        }
    }
    alert(message);
}
// --------------------------tsak13

function calculateTicketPrice() {
    let age = parseInt(prompt("Enter your age:"));
    let movieType = prompt("Enter the movie type (Regular or 3D):").toLowerCase();
    let ticketPrice;

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    if (age < 12) {
        ticketPrice = 8; 
    } else {
        ticketPrice = 10; 
    }

    if (movieType === '3d') {
        ticketPrice += 3; 
    }

    alert(`Ticket price: $${ticketPrice}`);
}



// ------------------task14---------------
function RestaurantOrderSystem() {
    const menu = ['Pizza', 'Pasta', 'Salad'];
    let order = prompt("Enter your order (Pizza, Pasta, Salad):").toLowerCase();
    let quantity = parseInt(prompt("Enter the quantity:"));
    let totalPrice;
    if (!menu.includes(order)) {
        alert("Invalid order. Please choose from Pizza, Pasta, or Salad.");
        return;
    }

    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    switch (order) {
        case 'pizza':
            totalPrice = 10 * quantity;
            break;
        case 'pasta':
            totalPrice = 8 * quantity;
            break;
        case 'salad':
            totalPrice = 6 * quantity;
            break;
        default:
            totalPrice = 0;
    }
    if (quantity > 1) {
        totalPrice *= 0.9; 
    }
    alert(`Total price: $${totalPrice}`);
}

// -----------------task15---------
function GradeEvaluation() {
    let grades = [];
    let totalGrades = 0;
    for (let i = 0; i < 3; i++) {
        let grade = parseFloat(prompt(`Enter grade for subject ${i + 1}:`));
        if (isNaN(grade) || grade < 0 || grade > 100) {
            alert("Please enter a valid grade between 0 and 100.");
            return;
        }
        grades.push(grade);
        totalGrades += grade;
    }
    let average = totalGrades / 3;
    let result;

    if (average >= 60) {
        result = "Pass";
    } else {
        result = "Fail";
    }
    alert(`Average grade: ${average.toFixed(2)}\nResult: ${result}`);
}


// ----------------------task16-----
function simulateLogin() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    const correctUsername = "ahmad";
    const correctPassword = "123123";

    if (username === correctUsername) {
        if (password === correctPassword) {
            alert("Login successful! Welcome, user.");
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("Username not found. Please check your username.");
    }
}

// -------------task17------------
function simulateTrafficLight() {
    const color = prompt("Enter the current color of the traffic light (Red, Yellow, Green):").toLowerCase();
    if (color === 'red') {
        alert("Stop!");
    } else if (color === 'yellow') {
        alert("Slow down!");
    } else if (color === 'green') {
        alert("Go!");
    } else {
        alert("Invalid color. Please enter Red, Yellow, or Green.");
    }
}


// -----------------task18----------------

function displayDayOfWeek() {
    const dayNumber = parseInt(prompt("Enter a number from 1 to 7 representing the day of the week:"));
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        alert("Invalid input. Please enter a number from 1 to 7.");
        return;
    }
    let day;
    if (dayNumber === 1) {
        day = "Monday";
    } else if (dayNumber === 2) {
        day = "Tuesday";
    } else if (dayNumber === 3) {
        day = "Wednesday";
    } else if (dayNumber === 4) {
        day = "Thursday";
    } else if (dayNumber === 5) {
        day = "Friday";
    } else if (dayNumber === 6) {
        day = "Saturday";
    } else if (dayNumber === 7) {
        day = "Sunday";
    }
    alert(`Day of the week: ${day}`);
}


// ----------------task19-----------
function HotelRoomBooking() {
    const roomType = prompt("Enter the type of room you want to book (Single, Double, Suite):").toLowerCase();
    const nights = parseInt(prompt("Enter the number of nights you want to stay:"));
    let pricePerNight;
    switch (roomType) {
        case 'single':
            pricePerNight = 50;
            break;
        case 'double':
            pricePerNight = 80;
            break;
        case 'suite':
            pricePerNight = 120;
            break;
        default:
            alert("Invalid room type. Please enter Single, Double, or Suite.");
            return;
    }
    if (isNaN(nights) || nights <= 0) {
        alert("Invalid number of nights. Please enter a valid number.");
        return;
    }
    const totalCost = pricePerNight * nights;
    alert(`Total cost for ${nights} nights in a ${roomType} room: $${totalCost}`);
}

// ---------------------------task20------

function generateMultiplicationTable() {
    const number = parseInt(prompt("Enter a number to generate its multiplication table:"));

    if (isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
        return;
    }

    let table = "";

    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
    }

    alert(`Multiplication table for ${number}:\n\n${table}`);
}
