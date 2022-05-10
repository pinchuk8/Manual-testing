let item_1 = 6
console.log(item_1)
let item_2 = 3
console.log(item_2)
let item_3 = item_1 + item_2
console.log(item_3)
let item_4 = "Yolochka"
console.log(item_4)
console.log(item_3 + item_4)
console.log(item_3 * item_4)
let item_5 = item_3
console.log(item_5)
let item_6 = 15
let item_6_type = typeof (item_6)
console.log("item_6==" + item_6, "item_6_type==" + item_6_type)
let item_7 = (String(item_6))
let item_7_type = typeof (item_7)
console.log("item_==" + typeof (item_7), "item_7_type==" + typeof (item_7_type))

let age_1 = 10
let age_2 = 18
let age_3 = 60
if (age_1 < age_2) {
    console.log("You don't have access cause you age is " + age_1 + " It's less then")
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !")
} else if (age_1 >= age_3) {
    console.log("Keep calm and look Culture channel")
} else { console.log("Technical work") }

//===================================================================================
let age5 = 60
function checkAge1 (age5){
if (age5 < 18) {
    console.log("You don't have access cause you age is " + age5 + " It's less then")
} else if (age5 >= 18 && age5 < 60) {
    console.log("Welcome !")
} else if (age5 >=60) {
    console.log("Keep calm and look Culture channel")
} else { console.log("Technical work") }
}
 checkAge1 (age5)
//================================================================================

const checkAge2 = function (age) {
    if (typeof (age) == "number") {
        if (age < 18) {
            console.log("You don't have access cause you age is " + age + " It's less then")
        } else if (age >= 18 && age < 60) {
            console.log("Welcome !")
        } else if (age >= 60) {
            console.log("Keep calm and look Culture channel")
        } else { console.log("Technical work") }
    } else {
        console.log("wrong type")
    }
}
checkAge2(65)

 //=================================================================================

 const checkAge3 = function (age) {
    age=Number(age)
    if (!isNaN(age)) {
        if (age < 18) {
            console.log("You don't have access cause you age is " + age + " It's less then")
        } else if (age >= 18 && age < 60) {
            console.log("Welcome !")
        } else if (age >= 60) {
            console.log("Keep calm and look Culture channel")
        } else { console.log("Technical work") }
    } else {
        console.log("не соответствует тип данных")
    }
}
checkAge3('-22')
//=====================================================================================
const checkAge4 = function (age) {
    age=Number(age)
    if (typeof (age) == "number") {
        if (age < 18) {
            console.log("You don't have access cause you age is " + age + " It's less then")
        } else if (age >= 18 && age < 60) {
            console.log("Welcome !")
        } else if (age >= 60) {
            console.log("Keep calm and look Culture channel")
        } else { console.log("Technical work") }
    } else {
        console.log("не соответствует тип данных")
    }
}

checkAge4(prompt ('How old are you?'))