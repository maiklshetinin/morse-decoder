const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let keys = Object.keys(MORSE_TABLE)
    let result = []
    let res = []
    let word = ''
    let count = 0
    for (let i = 0; i < expr.length; i++) {
        word += expr[i]
        count++
        if (count === 10) {
            let symbol = word.replace(/11/gi, '-').replace(/10/gi, '.').replace(/0/gi, '')
            result.push(symbol)
            count = 0
            word = ''
        }
    }
    result.forEach((el) => {
        if (el !== "**********") {
            let k = keys.find((e) => e === el ? e : 0)
            res.push(MORSE_TABLE[k])
        } else { res.push(' ') }
    })
    return (res.join(''))
}

module.exports = {
    decode
}