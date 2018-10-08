var word = [
	{
		nombre: "leon",
		pista: "Este mamífero se caracteriza en los machos por su gran melena"
	},
	{
		nombre: "lobo",
		pista: "Son fuertes y rápidos cazando siempre en manada"
	},
	{
		nombre: "jirafa",
		pista:"Los machos pueden alcanzar la altura de 5-6 m desde sus patas hasta los cuernos y pesar hasta 1,930 kg."
	},
	{
		nombre:"aguila",
		pista:"poseen un pico grande, poderoso y puntiagudo para desprender la carne de su presa. Cuentan también con tarsos y garras poderosas."
	}

]
String.prototype.replaceAt=function(index, replacement) {
	return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
var aleatorio =  Math.floor(Math.random() * word.length);
var palEs = word[aleatorio].nombre;
var intentos = 10;
var auxpalabra ="_";

function ayuda() {
	var help = word[aleatorio].pista;
	alert(`Ayuda: ${help}`)
}
function pintarEspacios (){
	auxpalabra = palEs;
	for (var i = 0; i < palEs.length; i++) {
		auxpalabra = auxpalabra.replaceAt(i,"_");
	}
	document.getElementById('palabra').innerHTML = auxpalabra;
}

function escogerL(){
	palEs = word[aleatorio].nombre;
	console.log(palEs);
	pintarEspacios();
}
function compararL() {
	var traer = document.getElementById("letra").value;
	var contador = 0;
	var int = 0;
	for (var i = 0; i < palEs.length; i++) {
		var le = palEs.charAt(i);
		if(le == traer.toLowerCase()){
			auxpalabra = auxpalabra.replaceAt(i,le);
			contador ++;
		}
	}
	if(contador == 0) {
		alert('Palabra no encontrada')
		intentos--;
		int = int + 1;
		console.log(int)
		switch (int) {
			case 1:
				alert('perdiste un intento')
				break;
			case 2:
				alert('perdiste un intento')
				break;
			default:
				break;
		}
	}
		
	
	if(intentos == 0){
		alert(`La palara era:${palEs}`);
		location.reload();
	}
	document.getElementById('palabra').innerHTML = auxpalabra;
	document.getElementById("intentos").innerHTML = intentos;
	return intentos;
}
function verificar() {
	
}
function iniciar(){
	escogerL();
	document.getElementById("intentos").innerHTML = intentos;
}
