function getDaysInMonth() {
const monthNumber = parseInt(document.getElementById('monthNumber').value);
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        alert("Invalid input. Please enter a valid month number between 1 and 12.");
        return;
    }
    let daysInMonth;
    if(monthNumber===1||monthNumber===3||monthNumber===5||monthNumber===7||monthNumber===8||monthNumber===10 || monthNumber===12)
            daysInMonth = 31;
else if(monthNumber===4||monthNumber===6||monthNumber===9||monthNumber===11){
    daysInMonth = 30;
}else{
    daysInMonth = 28;
}  
document.getElementById('result1').innerText=`Month ${monthNumber} has ${daysInMonth} days.`;

}


// --------------task2------------

function getDayName() {
    const dayNumber = parseInt(document.getElementById('dayNumber').value);

    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        alert("Invalid input. Please enter a valid day number between 1 and 7.");
        return;
    }

    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
    }
    document.getElementById('result2').innerText=`Day number ${dayNumber} corresponds to ${dayName}.`;

}


// -------task3---

function checkTriangleValidity() {
    const angle1 = parseInt(document.getElementById('angle1').value);
    const angle2 = parseInt(document.getElementById('angle2').value);
    const angle3 = parseInt(document.getElementById('angle3').value);

    if (isNaN(angle1) || isNaN(angle2) || isNaN(angle3) || angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
        document.getElementById('result3').innerText = "Invalid input. Please enter valid positive numbers for the angles.";
        return;
    }

    const sumOfAngles = angle1 + angle2 + angle3;

    if (sumOfAngles === 180) {
        document.getElementById('result3').innerText = "The triangle is valid.";
    } else {
        document.getElementById('result3').innerText = "The triangle is not valid.";
    }
}
//  ---------------task4----------

function checkNumber() {
    const number =  parseInt(document.getElementById('number').value);
    let result4;
    if (isNaN(number)) {
        
        alert("Invalid input. Please enter a valid number.");
        return;
    }
    if (number > 0) {
        document.getElementById('result4').innerText =`${number} is a positive number.`;
        
    } else if (number < 0) {
        document.getElementById('result4').innerText =`${number} is a negative number.`;
    } else {
        document.getElementById('result4').innerText =`${number} is neither positive nor negative (it is zero)`;
    }
}
