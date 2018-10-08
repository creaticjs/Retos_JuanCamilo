const urlApi = "http://gateway.marvel.com//v1/public/events"
const contenidoEvent = document.getElementById('contenidoEventos')
const gif = document.getElementById('gif')
var imgNoticias = [
    {
        tituloPeli:"Age of Ultron",
        url:"https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
    },
    {
        tituloPeli:"Acts of Vengeance!",
        url:"https://vignette.wikia.nocookie.net/marveldatabase/images/c/c5/Acts_of_Vengeance_Omnibus_Vol_1_1_Byrne_Cover.jpg/revision/latest?cb=20130903191736" 
    },
    {
        tituloPeli:"Age of Apocalypse",
        url:"https://static.comicvine.com/uploads/scale_small/0/77/181846-139830-age-of-apocalypse.jpg"
    },
    {
        tituloPeli:"All-New All-Different Marvel",
        url:"https://img.purch.com/o/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8xNTMvMjc4L29yaWdpbmFsL0FWRU4yMDE1MDAxX0FzcmFyVmFyLmpwZw=="
    },
    {
        tituloPeli:"Annihilation",
        url:"https://vignette.wikia.nocookie.net/marveldatabase/images/0/00/What_If_-_Annihilation_Vol_1_1.jpg/revision/latest?cb=20140502011840"
    },
    {
        tituloPeli:"Age of X",
        url:"https://upload.wikimedia.org/wikipedia/en/7/71/Age_of_x.jpg"
    },
    {
        tituloPeli:"Annihilation: Conquest",
        url:"https://vignette.wikia.nocookie.net/marveldatabase/images/9/90/Annihilation_Conquest_-_Starlord_Vol_1_1.jpg/revision/latest?cb=20140428042014"
    },
    {
        tituloPeli:"Armor Wars",
        url:"https://img.purch.com/h/1400/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8xNDQvNTI0L29yaWdpbmFsL0FSTU9SX1dBUlMtY292ZXIuanBnPzE0MjYxNzc4MjE="
    },
    {
        tituloPeli:"Atlantis Attacks",
        url:"https://vignette.wikia.nocookie.net/marveldatabase/images/f/f8/Atlantis_Attacks.jpg/revision/latest?cb=20111224153656"
    },
    {
        tituloPeli:"Avengers Disassembled",
        url:"http://cdn62.paninicloud.com/store/media/catalog/product/cache/82/image/9df78eab33525d08d6e5fb8d27136e95/s/l/sluxe002_0.jpg"
    },
    {
        tituloPeli:"Avengers NOW!",
        url:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        tituloPeli:"Avengers VS X-Men",
        url:"http://ultimatecomics.com/wp-content/uploads/2014/12/12-15-2014-19.jpg"
    },
    {
        tituloPeli:"Axis",
        url:"http://ultimatecomics.com/wp-content/uploads/2014/12/12-15-2014-19.jpg"
    },
    {
        tituloPeli:"Blood and Thunder",
        url:"https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/08/31/Pictures/_477cc93a-acfb-11e8-abd2-5c322fa89f61.jpg   "
    },
    {
        tituloPeli:"Chaos War",
        url:"https://upload.wikimedia.org/wikipedia/en/c/c9/Chaos_War_1.jpg"
    },
    {
        tituloPeli:"Civil War",
        url:"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        tituloPeli:"Civil War II",
        url:"https://i.kinja-img.com/gawker-media/image/upload/s--V9aBs4rQ--/c_scale,f_auto,fl_progressive,q_80,w_800/ebqmr08t6xjottwnjsxy.jpg"
    },
    {
        tituloPeli:"Crossing",
        url:"https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/05/traje-iron-man.jpg?itok=po13JbBw"
    },
    {
        tituloPeli:"Dark Reign",
        url:"https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/StoryArc/223/223._SX400_QL80_TTD_.jpg"
    },
    {
        tituloPeli:"Days of Future Present",
        url:"https://m.media-amazon.com/images/M/MV5BZGIzNWYzN2YtMjcwYS00YjQ3LWI2NjMtOTNiYTUyYjE2MGNkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }
];

function peticion(url) {
    return new Promise(function(resolve, reject){
        var httpX = new XMLHttpRequest();
        httpX.onload = function(){
            resolve(JSON.parse(this.responseText));
        }
        httpX.onerror = function(){
            reject(Error('Error 🤮'));
        }
        httpX.open('GET',`${url}?apikey=b713b6bf584a6d1e54811b758c708875&ts=1&hash=ef687b22b3e25eebf85dafdf6667a14f`,true);
        httpX.send()
    });
    /*return $.ajax({
        url: url,
        type: "GET",
        data:{
        apikey: "b713b6bf584a6d1e54811b758c708875",
        ts: "1",
        hash: "ef687b22b3e25eebf85dafdf6667a14f"
    },
    dataType:"Json",
    })
    .done(function(data){
        return data;
    })
    .fail(function(errorThrown){
        return errorThrown
    })*/
}

function mostrarPeliculas() {
    $('#pelis').show(); 
    peticion(urlApi)
    .catch(function(error){
        swal("Error 404","error","error");
    })
    .then(function(json){
        $('#gif').hide();
        const data = json.data.results;
        for (let i = 0; i < data.length; i++) {
            let element = data[i];
            var cont = document.createElement('div')
            cont.setAttribute('class','container-fluid bg-4 text-center')

            var titulo = document.createElement('h1')
            var nombreTitulo = document.createTextNode(element.title)
            var cont2 = document.createElement('div');
            cont2.setAttribute('class','row');
            
            var img = document.createElement('img')

            var urlPeli = Enumerable.From(imgNoticias)
            .Where(`$.tituloPeli == '${element.title}'`).ToArray();
            var srcImg =  urlPeli[0].url;
            img.setAttribute('src',srcImg)
            img.setAttribute('class','estilosImg')
            var cont3 = document.createElement('div')
            cont3.setAttribute('class','col-sm-4')
            var parrafo = document.createElement('p')
            var contenidoP = document.createTextNode(element.description)

            parrafo.appendChild(contenidoP)
            titulo.appendChild(nombreTitulo)
            cont3.appendChild(titulo)
            cont3.appendChild(img)
            cont3.appendChild(parrafo)
            cont2.appendChild(cont3)
            cont.appendChild(cont2)
            contenidoEvent.appendChild(cont3)
        }    
        })

}
mostrarPeliculas();
$.ajax({
    url: "http://gateway.marvel.com/v1/public/characters",
    type: "GET",
    data:{
    apikey: "b713b6bf584a6d1e54811b758c708875",
    ts: "1",
    hash: "ef687b22b3e25eebf85dafdf6667a14f"
},
dataType:"Json",
})
.done(function(data){
    console.log(data);
})

function mifuncion(elemento) {
    var idPersonaje = $(elemento).data('value');
    $.ajax({
        type: "get",
        url: `http://gateway.marvel.com/v1/public/characters/${idPersonaje}?apikey=b713b6bf584a6d1e54811b758c708875&ts=1&hash=ef687b22b3e25eebf85dafdf6667a14f`,
        data: "json",
    })
    .done(function(p){
        const personaje = p.data.results[0]
        swal(`Name: ${personaje.name}`,`Descripción: ${personaje.description}`,)
    })
}
function mostrarPersonajes() {
    $('#pelis').hide();
    peticion('http://gateway.marvel.com//v1/public/characters/1011334?apikey=b713b6bf584a6d1e54811b758c708875&ts=1&hash=ef687b22b3e25eebf85dafdf6667a14f')
    
}
