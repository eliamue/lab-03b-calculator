
const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const addBtn = document.getElementById('add-btn');
const addResult = document.getElementById('add-result');
    addBtn.addEventListener('click', () => {
        addResult.textContent = Number(add1.value) + Number(add2.value);
     }); 

const sbt1 = document.getElementById('sbt1');
const sbt2 = document.getElementById('sbt2');
const sbtBtn = document.getElementById('sbt-btn');
const sbtResult = document.getElementById('sbt-result');
    sbtBtn.addEventListener('click', () => {
        sbtResult.textContent = Number(sbt1.value) - Number(sbt2.value);
     }); 

const mpy1 = document.getElementById('mpy1');
const mpy2 = document.getElementById('mpy2');
const mpyBtn = document.getElementById('mpy-btn');
const mpyResult = document.getElementById('mpy-result');
    mpyBtn.addEventListener('click', () => {
        mpyResult.textContent = Number(mpy1.value) * Number(mpy2.value);
     }); 

const dvd1 = document.getElementById('dvd1');
const dvd2 = document.getElementById('dvd2');
const dvdBtn = document.getElementById('dvd-btn');
const dvdResult = document.getElementById('dvd-result');
    dvdBtn.addEventListener('click', () => {
        dvdResult.textContent = Number(dvd1.value) / Number(dvd2.value);
     }); 