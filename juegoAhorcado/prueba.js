var word = [
	{
		nombre: "leon",
		pista: "Este mamífero se caracteriza en los machos por su gran melena",
		img:"http://www.estudiantes.info/ciencias_naturales/images/leonpadre2.jpg"
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
	},
	{
		nombre:"elefante"
	},
	{
		nombre:"hiena"
	}

];
var random = Math.floor(Math.random() * word.length);
var url = word[random].img
var help = word[random].pista;
var word = word[random].nombre;
const intentos = 6;
var cavas = document.getElementById('canvas');
var contexto = canvas.getContext("2d");
String.prototype.replaceAt=function(index, replacement) {
	return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
function iniciarJuego() {
    $('#inicio').hide();
    $('body').css({
        background: "#000" 
    });
    $("#titulo").css({
        color:"#0c98aa"
	});
	pintarEspacios();
}
function pintarEspacios() {
	w = word;
	for (let p = 0; p < word.length; p++) {
		w = w.replaceAt(p,"-");
	}
	document.getElementById('palabraP').innerHTML = w; 
}
function compararLetra() {
	var letraUser = $('#input').val();
    for (let i = 0; i < word.length; i++) {
		if (letraUser.toLowerCase() == word.charAt(i)) {
			var p = $('#palabraP').text();
			var encontrada = p.replaceAt(i,letraUser)
			document.getElementById('palabraP').innerHTML=encontrada
		}
	}
	setTimeout(()=>{
		if($('#palabraP').text() == word){
			swal("Good job!", "Ganaste el Juego", "success");
			$('#ayuda').hide();
		}
	},1500)
	var l = word.indexOf(letraUser,0);
	if(letraUser.toLowerCase() != word.charAt(l)){
		perdioIntentos();
	}
}
const int = intentos;
var inten = intentos;
var cabeza = new Image();
cabeza.src = `imagenes/cabeza.png`;

var cuerpo = new Image();
cuerpo.src = "imagenes/cuerpo.png"

var manoDerecha = new Image();
manoDerecha.src = "imagenes/manoDerecha.png"

var manoIzquierda = new Image();
manoIzquierda.src = "imagenes/manoIzquierda.png"

var pieDerecho = new Image();
pieDerecho.src = "imagenes/pieDerecho.png"

var pieIzquierdo = new Image();
pieIzquierdo.src = "imagenes/pieIzquierdo.png"

function imagenCanvas(img,x,y) {
	contexto.drawImage(img, x, y)
}
console.log(word)
function perdioIntentos() {
		console.log(int , inten)
		inten = inten - 1;
		if(inten == (int - 1)){
			imagenCanvas(cabeza, 80, 0);
		} else
		if(inten == (int-2)){
			imagenCanvas(cuerpo , 80 ,0)
		}else
		if(inten == (int-3)){
			imagenCanvas(manoDerecha,80,0)
		}else
		if(inten == (int - 4)){
			imagenCanvas(manoIzquierda,80,0)
		} else
		if(inten == (int-5)){
			imagenCanvas(pieDerecho,80 ,0)
		}else
		if(inten == 0){
			imagenCanvas(pieIzquierdo,80 ,0)
			$('#input').hide();
			$('#camposPalabra').hide();
			$('#ayuda').hide();
			swal(`Perdiste el Juego la palabra era: ${word}`)
			var botonReiniciar = '<div class="col text-center"><button id="ayuda" onclick="reiniciar()" type="button" class="btn btn-outline-danger">Reinicio</button><div>';
			document.getElementById('final').innerHTML = botonReiniciar;

		}
}
function reiniciar() {
	location.reload();
}

function ayuda() {
	swal(`Àyuda: ${help}`)
}