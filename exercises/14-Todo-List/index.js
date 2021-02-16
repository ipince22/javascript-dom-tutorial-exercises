import { create } from "domain";

// Your code here

const ul = document.querySelector("#ul");
ul.addEventListener("click", function(e) {
	this.removeChild(e.target);
});

const addToDo = document.querySelector("#addToDo");
addToDo.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		let li = document.createElement("LI");
		li.innerHTML = "<span><i class='fa fa-trash'></i></span> " + e.currentTarget.value;
		ul.appendChild(li);
		addToDo.value = "";
		//alert(e.currentTarget.value);
	}
});
