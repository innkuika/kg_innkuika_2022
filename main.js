// Question:
//     Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.
// For example:
//     Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
//     Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

const phoneticMap = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
let solution = "";

for (let i = 2; i < process.argv.length; i++) {
    let number_string = process.argv[i].toString();
    for (let j = 0; j < number_string.length; j++) {
        solution += `${phoneticMap[parseInt(number_string[j])]}`
    }

    if (i === process.argv.length - 1) {
        break;
    }
    solution += `, `

}
console.log(solution);
