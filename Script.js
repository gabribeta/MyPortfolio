document.addEventListener("DOMContentLoaded", function(e) {

	var elBotones = document.querySelectorAll('button');
	console.log(elBotones);

	for (var i = 0; i < elBotones.length; i++) {
	elBotones[i].addEventListener("click", manejarBotones, false)
	}

});

function manejarBotones(e) {
	e.preventDefault();
	alert("The message has been sent successfully!");
}

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('form');
    formulario.addEventListener('send', function() {
    formulario.reset();
    });
});
