module.exports = function toReadable (number) {
    let numbers1_20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
                   'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let hundred = 'hundred';
  
    let result;

    if (number <= 20) {

        result = numbers1_20[number];

    } else if (20 < number && number < 100 && number % 10 !== 0) {

        result = `${tens[Math.floor(number/10)-2]} ${numbers1_20[number%10]}`;

    } else if (20 < number && number < 100 && number % 10 === 0) {

        result = `${tens[Math.floor(number/10)-2]}`;

    } else if (100 < number && number < 999 && number % 100 !== 0 && number % 100 < 21 ) {

        result = `${numbers1_20[Math.floor(number/100)]} ${hundred} ${numbers1_20[number % 100]}`;

    } else if (100 < number && number <= 999 && number % 100 !== 0 && number % 10 !== 0 && number % 100 > 20) {

        result = `${numbers1_20[Math.floor(number/100)]} ${hundred} ${tens[Math.floor(number % 100 / 10) -2 ]} ${numbers1_20[number % 100 % 10]}`;

    } else if (100 < number && number <= 999 && number % 100 !== 0 && number % 10 === 0 && number % 100 > 20) {

        result = `${numbers1_20[Math.floor(number/100)]} ${hundred} ${tens[Math.floor(number % 100 / 10) -2 ]}`; 

    } else if (100 <= number && number < 999 && number % 100 === 0) {

        result = `${numbers1_20[Math.floor(number/100)]} ${hundred}`;

    }
    
    return result;
    }
