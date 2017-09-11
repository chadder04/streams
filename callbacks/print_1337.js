module.exports = function print1337(html) {
    var output = html;
    var translateLetters = {
        'ck': 'x', 
        'er': '0r', 
        'you': 'j00',
        a: '4', 
        e: '3', 
        l: '1', 
        o: '0', 
        s: '5', 
        t: '7'
    }

    for (key in translateLetters) {
        output = output.replace(new RegExp(key, "g"), translateLetters[key]);
    }
    
    console.log(output);
}