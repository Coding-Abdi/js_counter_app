let saveEl = document.getElementById("save-el");

let count = 0;

let countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
    countEl.innerText = count
}