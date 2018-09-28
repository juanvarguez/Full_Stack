const input = document.querySelector("#input-todo");
let remove = document.querySelectorAll("i");

input.addEventListener("keydown", function(key){
	const todoText = this.value.replace(/ /g,'');
	if(key.keyCode == 13 && todoText != ""){
		this.value = "";
		const list = document.querySelector(".list-group");
		const new_el = document.createElement("li");
		new_el.classList.add("list-group-item");
		new_el.innerHTML = todoText + '<i class="fas fa-times"></i>';
		list.appendChild(new_el);
		new_el.childNodes[i].addEventListener("click", removeElement());
	}});


remove.forEach((element) => element.addEventListener("click", removeElement()));

function removeElement(){
	this.parentElement.remove();
}