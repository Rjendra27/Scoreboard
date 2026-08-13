let num1 = 0
let num2 = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2



function add1() {
    num1 += 1
    document.getElementById("num1-el").textContent = num1   
}

function add2() {
    num1 += 2
    document.getElementById("num1-el").textContent = num1
}

function add3() {
    num1 += 3
    document.getElementById("num1-el").textContent = num1
}

function guestAdd1() {
    num2 += 1
    document.getElementById("num2-el").textContent = num2
}

function guestAdd2() {
    num2 += 2
    document.getElementById("num2-el").textContent = num2
}

function guestAdd3() {
    num2 += 3
    document.getElementById("num2-el").textContent = num2
}