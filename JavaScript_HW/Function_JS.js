let t1 = 10
let t2 = 20
let t3 = 30
let t4 = 40
let f11 = () => { console.log('Hello') }
let f22 = (t11, t22) => { console.log('Sum==', t11 + t22) }
let f33 = (t1 > t2) ?
    (tt1, tt2) => console.log('order', tt1 + tt2) :
    (tt1, tt2) => console.log('order', tt1 - tt2)
f33(t3, t4)

function yolochka33() { }
yolochka33.prototype.fast = function () {
    console.log('Fast')
}
yolochka33.prototype.green = function (sun, co2) {
    console.log('Green==', sun, '+', co2)
}
yolochka33.prototype.shishki = function () {
    console.log('shishki==yolki')
}
let forest = new yolochka33()
forest.fast()
forest.green(100, 50)
forest.shishki
