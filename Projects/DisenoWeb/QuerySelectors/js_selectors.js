const myButton = document.querySelector("button");

myButton.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("highlight");
});
