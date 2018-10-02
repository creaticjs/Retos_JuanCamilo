const API = "https://swapi.co/api/";
const FILMS = 'https://swapi.co/api/films/'
var contenido = document.getElementById('contenedor');

var imagenes = [
    {
        url: 'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=480'
    },
    {
        url:'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg?region=18%2C0%2C660%2C1000&width=480'
    },
    {
        url:'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg?region=15%2C9%2C651%2C979&width=480'
    },
    {
        url:'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg?region=0%2C0%2C736%2C1090&width=480'
    },
    {
        url:'https://static.tvtropes.org/pmwiki/pub/images/077aefe0d1790721a0e2c8f8b370be3a.jpg'
    },
    {
        url:'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg?region=12%2C9%2C618%2C982&width=480'
    },
    {
        url:'https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg?region=25%2C22%2C612%2C953&width=480'
    },
    {
        url:'https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=480',
        episodio:7
    }
];
$.ajax({
    type: "get",
    url: FILMS,
    dataType:"Json"
})
.done(function(data){
    datosPeli = data.results;
    datosPeli.forEach(pelicula => {
                contenido.setAttribute('class','row')

                var div = document.createElement('div')
                div.setAttribute('class','col-sm-4')


                var img = document.createElement('img')
                var dataImagen = imagenes[pelicula.episode_id].url
                img.setAttribute('src',dataImagen)
                img.setAttribute('width','70%')

                var texto = document.createElement('h3')
                var t = document.createTextNode(`Titulo: ${pelicula.title}`)
                
                var modal = document.createElement('div')
                modal.setAttribute('class','modal fade')
                modal.setAttribute('role','dialog')

                // Contiene el modal
                contieneModal = document.createElement('div')
                contieneModal.setAttribute('class','contenedorModal')
                ButtonViewModal = document.createElement('button')
                ButtonViewModal.setAttribute('class','btn btn-primary btn-lg')
                ButtonViewModal.setAttribute('data-toggle','modal')
                ButtonViewModal.setAttribute('data-target',`#${pelicula.episode_id}`)
                textoModalV = document.createTextNode('Mas Info')
                ButtonViewModal.appendChild(textoModalV)

                contenidoM = document.createElement('div')
                contenidoM.setAttribute('class','modal-content')

                // header modal
                divHeader = document.createElement('div')
                divHeader.setAttribute('class','modal-header')
                boton = document.createElement('button')
                boton.setAttribute('type','button')
                boton.setAttribute('class','close')
                textBoton = document.createTextNode('&times;')
                boton.appendChild(textBoton)
                titleModal = document.createElement('h4')
                titleText = document.createTextNode('Descripción de la peli:')
                titleModal.appendChild(titleText)

                //modalDialog
                divDialog = document.createElement('div')
                divDialog.setAttribute('class','modal fade')
                divDialog.setAttribute('id',`${pelicula.episode_id}`)
                divDialog.setAttribute('role','dialog')

                divDialog2 = document.createElement('div')
                divDialog2.setAttribute('class','modal-dialog')

                //Body Modal
                divBody = document.createElement('div')
                descrip = document.createElement('p')
                textContenido = document.createTextNode(pelicula.opening_crawl)
                descrip.appendChild(textContenido)
                
                
                //Footer Modal
                divFooter = document.createElement('div')
                divFooter.setAttribute('class','modal-footer')
                buttonFooter = document.createElement('button')
                buttonFooter.setAttribute('type','button')
                buttonFooter.setAttribute('class','btn btn-default')
                buttonFooter.setAttribute('data-dismiss','modal')
                textFooter = document.createTextNode('Close')
                buttonFooter.appendChild(textFooter)

                divHeader.appendChild(boton)
                divHeader.appendChild(titleModal)
                divBody.appendChild(descrip)
                divFooter.appendChild(buttonFooter)

                contenidoM.appendChild(divHeader)
                contenidoM.appendChild(divBody)
                contenidoM.appendChild(divFooter)
                divDialog2.appendChild(contenidoM)
                divDialog.appendChild(divDialog2)

                divDialog.appendChild(divDialog2)
                contieneModal.appendChild(ButtonViewModal)
                contieneModal.appendChild(divDialog)
            
                texto.appendChild(t)
                div.appendChild(texto)
                div.appendChild(img)
                div.appendChild(contieneModal)
                contenido.appendChild(div)
            });
})
.fail(function(errorThrown ){
    swal("Error",errorThrown, "error");
})
.always(function(){
    $('#gif').hide();
    $('#carrusel').hide();
    console.log('Cargando contenido')
})
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("pagina Cargada");
});
