let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(saveEl)

let uncountEl = document.getElementById("count-el")
console.log(uncountEl)


let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
function uncount() {
    if(count<=0) return
    count = count - 1
    uncountEl.innerText = count
}
function save() {
    let saveStr = count + " " + " - "
    saveEl.textContent += saveStr
    console.log(count)

}