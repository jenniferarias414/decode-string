// Write your code below this line
// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

// function decoder(str) {
//     for (i=0; i<str.length; i++) {
//         if (str[0] === NaN) {
//             console.log('this no gonna work')
//         } else

//     }}


    // owen's soln
    function decodeString(string){

        const shift = parseInt(string[0])
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'
        let newString = ""

        for (let i = 1; 1<string.length; i++) {
            newString += alphabet[alphabet.indexOf(string[i]) + shift]
        }
        return newString
    }

    console.log(decodeString('1a'))