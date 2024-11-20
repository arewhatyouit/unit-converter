/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el");
let inputBtn = document.getElementById("input-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let inputValue = [];

// 
inputBtn.addEventListener("click", function() {
    let value = Number(inputEl.value);
    if (isNaN(value)) {
        console.error("Invalid input: Please enter a number.");
        return;
    } else {
    inputValue.push(inputEl.value)

    let storedLengthM = Number(inputValue[0]) * 3.281
    storedLengthM = Math.round((storedLengthM + Number.EPSILON) * 100) / 100
    let storedLengthF = Number(inputValue[0]) * 0.3048
    storedLengthF = Math.round((storedLengthF + Number.EPSILON) * 100) / 100
    let storedVolumeL = Number(inputValue[0]) * 0.264
    storedVolumeL = Math.round((storedVolumeL + Number.EPSILON) * 100) / 100
    let storedVolumeG = Number(inputValue[0]) * 3.78541
    storedVolumeG = Math.round((storedVolumeG + Number.EPSILON) * 100) / 100
    let storedMassK = Number(inputValue[0]) * 2.204
    storedMassK = Math.round((storedMassK + Number.EPSILON) * 100) / 100
    let storedMassP = Number(inputValue[0]) * 0.453592
    storedMassP = Math.round((storedMassP + Number.EPSILON) * 100) / 100

    lengthEl.textContent = `${inputValue[0]} meters = ${storedLengthM} feet | ${inputValue[0]} feet = ${storedLengthF} meters`
    volumeEl.textContent = `${inputValue[0]} meters = ${storedVolumeL} feet | ${inputValue[0]} feet = ${storedVolumeG} meters`
    massEl.textContent = `${inputValue[0]} meters = ${storedMassK} feet | ${inputValue[0]} feet = ${storedMassP} meters`

    inputValue = [];
}})
