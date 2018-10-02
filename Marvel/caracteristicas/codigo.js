const urlApi = "http://gateway.marvel.com//v1/public/characters"
var img = [
    {url:""}
];
$.ajax({
    url: urlApi,
    data:{
        apikey: "b713b6bf584a6d1e54811b758c708875",
        ts: "1",
        hash: "ef687b22b3e25eebf85dafdf6667a14f"
    },
    type: "GET",
    dataType:"Json",
})

.done(function(json){
    const data = json.data.results;
    console.log(data)
})
.fail(function(errorThrown ){ 
    console.log(`Error: ${errorThrown}`)
})
