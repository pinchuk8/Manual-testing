//ЗАДАНИЕ 1.Возвести 2 в 10 степень, вывести результат
let i = 1
let result = 1
while (i < 11) {
    result = result * 2
    i++
}
console.log(result)

//Пребразовать задание 1. в функцию, принимающую на вход степень, в которую будет возводиться число 2

//вариант 1
const power = function (num) {
    let result_a = 1
    for (let i = 1; i <= num; i++) {
        result_a = result_a * 2
    }
    return result_a
}
console.log(power(10))

//вариант 2
const power2 = function (num) {
    return 2 ** num
}
console.log(power2(10))

//вариант 3
const power3 = function (num) {
    return Math.pow(2, num)
}
console.log(power3(10))

//ЗАДАНИЕ 2. Вывести в консоль 
//:)
//:):)
//:):):)
//:):):):)
//:):):):):)

let word = ':)'
let result_b = ''
for (let i = 1; i <= 5; i++) {
    result_b += word
    console.log(result_b)
}
// преобразовать задание 2, чтобы функция принимала значение введённой строки

function printSmile1(stroka, numberOfRows) {
    let result_c = '';
    for (let i = 1; i <= numberOfRows; i++) {
        result_c += stroka
        console.log(result_c)
    }
}
printSmile1(':(', 5)

function printSmile2(stroka, numberOfRows) {
    for (let i = 1; i <= numberOfRows; i++) {
        console.log(stroka.repeat(i))
    }
}
printSmile2(':)', 6)

//Задание 3. Написать функцию, принимающую на вход слово. Вывести информацию по количеству гласных и согласных в слове
function getWordStructure(word) {
    const glasn = 'aeiouy'.split('')
    const sogl = 'bcdfghjklmnpqrstvwxz'.split('')
    let number_of_glasn = 0;
    let number_of_sogl = 0;
    for (char of word.toLowerCase()) {
        if (glasn.includes(char)) number_of_glasn++;
        if (sogl.includes(char)) number_of_sogl++;
    }
    console.log(`Слово ${word} состоит из ${number_of_glasn} гласных и ${number_of_sogl} согласных`)
}
getWordStructure('Case-list')

//Задание 4. Определить является ли слово палиндромом

function isPalindrom_1(word) {
    let newStrochka = '';
    for (i = word.length - 1; i >= 0; i--) {
        newStrochka = newStrochka + word[i];
    }
    if (word.toLowerCase() == newStrochka.toLowerCase()) {
        console.log(word, '- палиндром');
    } else {
        console.log(word, '-не палиндром');
    }
}
isPalindrom_1('Ab1ba')

function isPalindrom_2(word2) {
    word2 = word2.toLowerCase()

    const len = word2.length;

    for (let i = 0; i < len / 2; i++) {
        if (word2[i] !== word2[len - 1 - i]) {
            return 'It is not a palindrom';
        }
    }
    return 'It is a palindrom';
}
console.log(isPalindrom_2('Ab1ba'))

function isPalindrom_3(word3) {
    return word3.toLowerCase() == word3.toLowerCase().split('').reverse().join('')
}
console.log(`${isPalindrom_3('Ab1ba') ? 'It is a palindrom' : 'It is not a palindrom'}`)





