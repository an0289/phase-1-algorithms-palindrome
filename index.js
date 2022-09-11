//function isPalindrome(word) {
//  const token = /[^A-Za-z0-9]/g
//  const lowerCaseWord = word.toLowerCase().replace(re, '')
//  const reverseWord = lowerCaseWord.split('').reverse().join('')
//if (reverseWord === lowerCaseWord) {
//  return true 
//} else {return false}
//}

/*OR, since they are only giving us one word, could we just use 
the reverse.() method => this is my method created from taking from above
google searching*/

function isPalindrome(word) {
  const arrayWord = Array.from(word)
  console.log(arrayWord)
  reverseArrayWord = arrayWord.reverse().join('')
  console.log(reverseArrayWord)
  reverseWord = reverseArrayWord.toString()
  console.log(reverseWord)
  if (reverseWord === word) {
    return true
  }else {return false}
}

/* 
My function needs to take in a passed in word as an argument and return
true if the passed in word is a palindrome and false if not 
Will first see if there is a javascript method for this; can do an if/else
if no method, a palindrome is the same when read left to right and right
left 
*/

/*
  For mine that is not commented out; I found a solution on line for a 
  string of words. Since this test is just looking at a single word I
  thought I could make a code a bit more simple. Pulling methods from above
  and tweaking it as the tests failed since 'reverse.()' and 'join('') can 
  only be used on arrays; so had to convert to an array; also when I turnd
  'word' into an array, it became => ['w','o','r','d'], which is why
  I had to use 'join.('')*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
