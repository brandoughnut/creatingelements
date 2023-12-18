let injectHere = document.getElementById("injectHere");
let btnClick = document.getElementById("btnClick");

btnClick.addEventListener("click", function (e) {
//   let h1 = document.createElement("h1");
//   h1.textContent = "Hello World";
//   injectHere.appendChild(h1);
MakeCard('joe')
});

function MakeCard(cardTitle) {
  let h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.textContent = cardTitle;

  let p = document.createElement("p");
  p.className = "card-text";
  p.textContent =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";

  let a = document.createElement("a");
  a.className = "btn btn-primary";
  a.textContent = "Go somewhere";

  let bodyDiv = document.createElement("div");
  bodyDiv.className = "card-body";

  bodyDiv.appendChild(h5);
  bodyDiv.appendChild(p);
  bodyDiv.appendChild(a);

  let img = document.createElement("img");
  img.className = "card-img-top";
  img.src = "...";
  img.alt = "...";

  let outerDiv = document.createElement("div");
  outerDiv.className = "card";
  outerDiv.style = "width: 18rem";

  outerDiv.appendChild(img);
  outerDiv.appendChild(bodyDiv);

  injectHere.appendChild(outerDiv);
}
