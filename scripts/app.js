let injectHere = document.getElementById("injectHere");
let btnClick = document.getElementById("btnClick");


btnClick.addEventListener('click', function(e) {
    let h1 = document.createElement("h1");
h1.textContent = "Hello World";
injectHere.appendChild(h1);
});
