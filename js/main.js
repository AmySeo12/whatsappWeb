window.addEventListener("load", cargarPagina);
var input= document.getElementById("mensajes");
var chat= document.getElementById("chat");
var lista= document.querySelectorAll(".w-recent-chats li");

function cargarPagina(){
	input.addEventListener("keydown", enter);

	for (var i = 0; i <lista.length; i++) {
		lista[i].addEventListener("click", cambioDeInfo);
	}
}

function enter(e){
	if(e.keyCode== 13){
		var newElement= crearClases("div", ["w-message", "w-message-out"]);
		chat.appendChild(newElement);

		var newChat= crearClases("div", ["w-message-text"]);
		newElement.appendChild(newChat);

		var newText= crear("p", input.value);
		newChat.appendChild(newText);

		var hora= crearClases("div", ["time"]);
		horaActual(hora);
		newChat.appendChild(hora);

		input.value= "";
	}
}

function crear(etiqueta, texto){
	var etiqueta= document.createElement(etiqueta);
	etiqueta.innerHTML = texto;
	return etiqueta
}

function crearClases(etiqueta, clases= []){
	var etiqueta= document.createElement(etiqueta);

	for(var i= 0, l= clases.length; i < l; i++){
		etiqueta.classList.add(clases[i]);
	}
	return etiqueta;
}

function crearAttribute(etiqueta, objeto= {}){
	var etiqueta= document.createElement(etiqueta);

	for( var llaves in objeto){
		etiqueta.setAttribute(llaves, objeto[llaves]);
	}
	return etiqueta;
}

function horaActual(etiqueta){
	var horaActual= new Date();
	var hora= horaActual.getHours();
	var minutos= horaActual.getMinutes();

	if(minutos < 10)
		etiqueta.innerHTML= hora+ ":0" + minutos;
	else
		etiqueta.innerHTML= hora + minutos;
	return etiqueta;
}

function cambioDeInfo(){
	var menChat= document.getElementsByTagName("header")[1];
	menChat.firstElementChild.firstElementChild.src= this.firstElementChild.firstElementChild.src;
	menChat.firstElementChild.children[1].innerHTML= this.firstElementChild.children[1].innerHTML;
}