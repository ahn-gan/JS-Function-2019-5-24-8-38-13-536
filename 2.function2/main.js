function palindrome(message){
    // wirte your code here
    return message === message.split('').reverse().join('');
}
// palindrome('hello'); // should return false
// palindrome('abcba'); // should return true