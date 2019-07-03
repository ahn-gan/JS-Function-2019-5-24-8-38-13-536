function countWords(message){
    // wirte your code here
    // 去除符号"! ; : , . ?"
    return message.replace(/[\!|\;|\:|\,|\.|\?]/g, '').split(' ').length;
}
// countWords('Good morning, I love JavaScript.'); // should return 5