const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let actual = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        if (expr[i] === '*') { result += ' '; continue; }
        actual = '';
        for (let k = 0; k < 10; k += 2) {
            if (expr[k + i] === '0') continue;
            else if (expr[k + i] === '1' && expr[k + i + 1] === '0') actual += '.';
            else if (expr[k + i] === '1' && expr[k + i + 1] === '1') actual += '-';
        }
        result += MORSE_TABLE[actual];
    }
    return result;
}

module.exports = {
    decode
}