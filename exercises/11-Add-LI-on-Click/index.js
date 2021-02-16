let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let myli = document.createElement("LI");
	myli.innerHTML = "Fourth element";
	let mylist = document.querySelector("#myList");
	mylist.appendChild(myli);
});
