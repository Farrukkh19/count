let countEl = document.getElementById("count-el")
console.log(countEl)

let uncountEl = document.getElementById("count-el")
console.log(uncountEl)


let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
function uncount() {
    count = count < 0 
    count = count = - 0
    uncountEl.innerText = count
}