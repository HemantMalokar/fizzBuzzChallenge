// Fizzbuzz challenge
//  print fizz for multiple of 3 and print buzz for multiple of 5 
// and print FizzBuzz for multiple by both 3 & 5

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizBuzz", i)
        } else if (i % 3 === 0) {
            console.log("Fizz", i);
        } else if (i % 5 === 0) {
            console.log("Buzz", i);
        }
    }
}

fizzBuzz();