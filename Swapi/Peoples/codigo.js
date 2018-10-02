const API = "https://swapi.co/api/"
const PEOPLES = 'https://swapi.co/api/people/'
const conten = document.getElementById('contenedor');


$('#personajesPrincipales').on('click',()=> {
  personajes1 = document.getElementById('personajes1')
  $.ajax({
    type: "get",
    url: PEOPLES,
    dataType: "Json",
  })
  .done((data)=>{
  for (let i = 0; i < 5; i++) {
    /**
    <div class="w3-card-4 w3-dark-grey" style="width:50%">
    <div class="w3-container w3-center">
      <h3>Friend Request</h3>
      <img src="img_avatar3.png" alt="Avatar" style="width:80%">
      <h5>John Doe</h5>

      <div class="w3-section">
        <button class="w3-button w3-green">Accept</button>
        <button class="w3-button w3-red">Decline</button>
      </div>
    </div>
  </div>
     */
    let personajes = data.results[i];
    console.log(personajes)
    var divPrincipal = document.createElement('div')
    divPrincipal.setAttribute('class','w3-card-4 w3-dark-grey');
    divPrincipal.setAttribute('style','50%')
    divSecundario = document.createElement('div');
    divSecundario.setAttribute('class','w3-container w3-center');
    var h2 = document.createElement('h2')
    var t = document.createTextNode(personajes.name)
    var parrafo = document.createElement('p')
    var p= document.createTextNode(personajes)
    h2.appendChild(t);
    divSecundario.appendChild(h2)
    divPrincipal.appendChild(divSecundario)
    personajes1.appendChild(divPrincipal)  
  }
})
});
$('#personajesSecundarios').on('click',()=> {
  personajes2 = document.getElementById('personajes2')
  $.ajax({
    type: "get",
    url: PEOPLES,
    dataType: "Json",
  })
  .done((data)=>{
  for (let i = 5; i <= 10; i++) {
    let persona2 = data.results[i];
    var div = document.createElement('div')
    var h3 = document.createElement('h2')
    var t = document.createTextNode(persona2.name)
    h3.appendChild(t);
    div.appendChild(h3)
    personajes2.appendChild(div)  
  }
})
});

$.ajax({
  type: "get",
  url: PEOPLES,
  dataType: "Json",
})
.done(function(d){
  let data = d.results
  data.forEach(people => {
    var texto = document.createElement('h3')
    var t = document.createTextNode(`${people.name}`)
    texto.appendChild(t)
  });
})
.fail(function(errorThrown ){
  swal("Error",errorThrown, "error");
})
.always(function(){
  $('#gif').hide();
})
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("pagina Cargada");
});