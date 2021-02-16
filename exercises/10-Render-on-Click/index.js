let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function () {
    let mydiv = document.createElement("DIV");
    mydiv.innerHTML = "Hello World";
    mydiv.style.background = "yellow";
    document.querySelector("body").appendChild(mydiv);
});
