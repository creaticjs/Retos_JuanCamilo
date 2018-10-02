 class equipo{
    constructor(nombre,urlimage,Dt,categoria,goles,pg,puntos,jugadores){
        this.nombre = nombre;
        this.urlimage = urlimage;
        this.Dt = Dt;
        this.categoria = categoria;
        this.goles = goles;
        this.pg = pg;
        this.puntos = puntos;
        this.jugadores = jugadores;
    }
 }
var dataEquipos = [
    {
        nombre: "Alavés",
        urlimage: "https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/173.png",
        Dt: "Abelardo Fernández",
        categoria: "A",
        goles: 15,
        pg: 12,
        puntos: 200,
        jugadores: 
        ["Fernando Pacheco","Antonio Sivera","Álex Domínguez","Carlos Vigaray"
        ,"Rubén Duarte","Rodrigo Ely","Víctor Laguardia","Guillermo Maripán"]
    },
    {
        nombre: "Athletic",
        urlimage: "https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/174.png",
        Dt: "Eduardo Berizzo",
        categoria: "A",
        goles: 10,
        pg: 11,
        puntos: 130,
        jugadores:
        ["Álex Remiro","Iago Herrerín","Unai Simón","Hodei Oleaga","Cristian Ganea",
        "Unai Núñez","Íñigo Martínez","Yeray Álvarez","Yuri","Íñigo Lekue"]
    },
    {
        nombre: "Atlético",
        urlimage: "https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/175.png",
        Dt: "Diego Simeone",
        categoria: "A",
        goles:6,
        pg: 5,
        puntos: 45,
        jugadores:
        ["Antonio Adán","Jan Oblak","Alex Dos Santos","Diego Godín","Filipe Luís",
        "Santiago Arias","Stefan Savic","Juanfran","Lucas Hernández","José Giménez"]
    },//Categoria B
    {
        nombre: "Barcelona",
        urlimage: "https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/178.png",
        Dt: "Ernesto Valverde",
        categoria: "B",
        goles:20,
        pg: 11,
        puntos: 170,
        jugadores: 
        ["Marc-André ter Stegen","Jasper Cillessen","Jokin Ezkieta","Nélson Semedo"
        ,"Gerard Piqué","Jordi Alba","Sergi Roberto","Samuel Umtiti"]
    },
    {
        nombre: "Celta",
        urlimage: "https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/176.png",
        Dt: "Antonio Mohamed",
        categoria: "B",
        goles:9,
        pg: 4,
        puntos: 40,
        jugadores:
        ["Sergio Álvarez","Rubén Blanco","Iván Villar","Hugo Mallo","David Costas",
        "Néstor Araújo","Robert Mazán","David Juncà","Kevin Vázquez","Gustavo Cabral"]
    },
    {
        nombre: "Madrid",
        urlimage: "https://e00-marca.uecdn.es/assets/sports/logos/football/png/72x72/186.png",
        Dt: "Julen Lopetegui",
        categoria: "B",
        goles:35,
        pg: 15,
        puntos: 450,
        jugadores:
        ["Keylor Navas","Kiko Casilla","Luca Zidane","Daniel Carvajal","Jesús Vallejo",
        "Sergio Ramos","Raphael Varane","Nacho","Marcelo","Álvaro Odriozola"]
    }
];
var selectEquipo = document.getElementById('equipos');
var nomEquipo = document.getElementById('nombre');
var imagenEquipo = document.getElementById('imagen');

selectEquipo.onchange = function () {
    //console.log(this.options[this.selectedIndex].text)
    imagenEquipo.setAttribute('src',dataEquipos[this.selectedIndex].urlimage);
    document.getElementById('nombreEquipo').innerHTML = dataEquipos[this.selectedIndex].nombre;
    document.getElementById('directorTec').innerHTML = dataEquipos[this.selectedIndex].Dt;
    document.getElementById('directorTec').innerHTML = `El director tecnico es: <strong>` + dataEquipos[this.selectedIndex].Dt;
    var jugadores = dataEquipos[this.selectedIndex].jugadores.length;
    
    var todos = " ";
    for (i = 0;  i < jugadores ; i++) {
        var jugador = dataEquipos[this.selectedIndex].jugadores[i];
        todos = todos + "<br>"+  jugador;
    }
    document.getElementById('jugadores').innerHTML = `<p>Los nombre de los Jugadores: ${todos}</p>`;   
}
 

var selectCategoria = document.getElementById('categoria');

selectCategoria.onchange = function(){
    var valor = this.value;
    var equipo = dataEquipos.filter(function(equiA){
        return equiA.categoria == valor;
    });
    console.log(equipo);
    var tabla = "";
    equipo.forEach(function(e){
    tabla += `<tr><td>${e.nombre}</td><td><img src = '${e.urlimage}'</td>`
    //tabla += "<tr><td><strong>"+e.nombre+"</td><td><img src = " +e.urlimage+ " width='150' height='150'/></td><tr>";
    });
    document.getElementById("equipo").innerHTML = tabla;
}

var selectPosiciones = document.getElementById('posiciones');

selectPosiciones.onchange = function(){
    var order = this.value;
    
    switch (order) {
        case "porGoles":
            var ordenar1 = dataEquipos.sort(function(a,b){
                if(a.goles > b.goles){
                    return 1;
                }
                if(a.goles < b.goles){
                    return -1;
                }
                return 0;
            })
            var aux1 = "";
            ordenar1.forEach(function(o){
                aux1 += `<tr><td>${o.nombre}</td><td>${o.goles}</td></tr>`
            })
            document.getElementById('ordenarP').innerHTML = aux1;
            break;

        case "porPuntos":
            var ordenar2 = dataEquipos.sort(function(a,b){
                if(a.puntos > b.puntos){
                    return 1;
                }
                if(a.puntos < b.puntos){
                    return -1;
                }
                return 0;
            })
            var aux2 = "";
            ordenar2.forEach(function(o){
                aux2 += `<tr><td>${o.nombre}</td><td>${o.puntos}</td></tr>`
            })
            document.getElementById('ordenarP').innerHTML= aux2;
            break;
        case "partidosGanados":
            var ordenar3 = dataEquipos.sort(function(a,b){
                if(a.pg > b.pg){
                    return 1;
                }
                if(a.pg < b.pg){
                    return -1;
                }
                return 0;
            })
            var aux3 = "";
            ordenar3.forEach(function(o){
                aux3 += `<tr><td>${o.nombre}</td><td>${o.pg}</td></tr>`
            })
            document.getElementById('ordenarP').innerHTML= aux3;
        break;

        default:
            break;
    }

 /*   if(order == "porPuntos"){
        var ordenarPP = dataEquipos.sort(function(a,b){
            if(a.puntos > b.puntos){
                return 1;
            }
            if(a.puntos < b.puntos){
                return -1;
            }
            return 0;
        })
        var aux = "";
        ordenarPP.forEach(function(o){
            aux += `<tr><td>${o.nombre}</td><td>${o.puntos}</td></tr>`
        })
    }

    document.getElementById('ordenarP').innerHTML= aux;
*/
}


