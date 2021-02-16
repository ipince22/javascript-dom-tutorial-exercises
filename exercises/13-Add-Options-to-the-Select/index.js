let mySelect = document.querySelector("#mySelect");
window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	for (let index = 0; index < countries.length; index++) {
		let option = document.createElement("option");
		option.innerHTML = countries[index];
		option.value = countries[index];
		mySelect.appendChild(option);
	}
};

mySelect.addEventListener("change", function() {
	alert(mySelect.value);
});
