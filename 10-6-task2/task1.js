function birthdate_month() {
    const numberOfMonth = parseInt(document.getElementById('birthdate-month').value);
    let nameOfMonth;

    switch (numberOfMonth) {
        case 1:
            nameOfMonth = 'January';
            break;
        case 2:
            nameOfMonth = 'February';
            break;
        case 3:
            nameOfMonth = 'March';
            break;
        case 4:
            nameOfMonth = 'April';
            break;
        case 5:
            nameOfMonth = 'May';
            break;
        case 6:
            nameOfMonth = 'June';
            break;
        case 7:
            nameOfMonth = 'July';
            break;
        case 8:
            nameOfMonth = 'August';
            break;
        case 9:
            nameOfMonth = 'September';
            break;
        case 10:
            nameOfMonth = 'October';
            break;
        case 11:
            nameOfMonth = 'November';
            break;
        case 12:
            nameOfMonth = 'December';
            break;
        default:
            nameOfMonth = 'Invalid month number';
    }

    document.getElementById('result1').innerText = `The name of the month is: ${nameOfMonth}`;
}

let count = 1;

for (let i = 1; i <= 4; i++) {
    let line = '';

    for (let j = 1; j <= i; j++) {
        line += count + ' ';
        count++;
    }

    console.log(line);
}
