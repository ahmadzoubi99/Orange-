function tellFortune(jobTitle, location, partnerName, numKids) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numKids} kids.`;
    console.log(fortune);
}

tellFortune('software engineer', 'Jordan', 'Alice', 3);


function calculateDogAge(puppyAge) {
    const dogAge = puppyAge * 7;
    const result = `Your doggie is ${dogAge} years old in dog years!`;
    console.log(result);
}

calculateDogAge(1);
