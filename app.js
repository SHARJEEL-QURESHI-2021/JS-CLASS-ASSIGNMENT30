let kg = document.getElementById('kg');
let pound = document.getElementById('pound');
let ounce = document.getElementById('ounce');
let clear = document.getElementById('clear');


kg.addEventListener("input",() => {
    pound.value = kg.value * 2.20462
    ounce.value = kg.value * 35.274
})

function clearAll(){
    location.reload()
}