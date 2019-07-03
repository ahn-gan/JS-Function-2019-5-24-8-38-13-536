function alphabetSort(message){
    // wirte your code here
    return message.split('').sort((a, b) => {
        return a.localeCompare(b);
    });
}
// alphabetSort('hello'); // should return 'ehllo'