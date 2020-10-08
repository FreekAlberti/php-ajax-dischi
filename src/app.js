const Handlebars = require("handlebars");
const $ = require("jquery");

$(document).ready(function() {
    chiamataAjax();
    sceltaAutore();
 });

 //FUNCTION

//chiamata Ajax GET iniziale
function chiamataAjax() {
    $.ajax(
        {
            "url": "http://localhost/php-ajax-dischi/api.php",
            "method": "GET",
            "success": function (data) {
                var risultatiAPI = data;
                renderDB(risultatiAPI);
            },
            "error": function (richiesta, stato, errori) {
                console.log(errori);
            }
        }
    );
}

//renderizzazione prima risposta ajax select e section
function renderDB(risultatiAPI) {
    for (var i = 0; i < risultatiAPI.length; i++) {
        //HANDLEBARS
        renderAlbum(risultatiAPI, i);
        //HANDLEBARS
        var author = risultatiAPI[i]["author"];
        var selezione = $("#select-author");
        var source = $("#author-template").html();
        var template = Handlebars.compile(source);
        var context = {
            author: author
        };
        var html = template(context);
        selezione.append(html);
    }
}

//valore autore selezionato utente
function sceltaAutore() {
    var selettore = $("#select-author");
    selettore.change(function() {
        var autoreScelto = $(this).val();
        selezioneAjax(autoreScelto);
        $(".wrapper").html("");
    })
}

// chiamata ajax
function selezioneAjax(autoreScelto) {
    $.ajax(
        {
            "url": "http://localhost/php-ajax-dischi/api.php",
            "method": "GET",
            "success": function (data) {
                var risultatiAPI = data;
                selezioneRender(risultatiAPI, autoreScelto);
            },
            "error": function (richiesta, stato, errori) {
                console.log(errori);
            }
        }
    );
}

//renderizzazione valore selezionato utente
function selezioneRender(risultatiAPI, autoreScelto) {
    for (var i = 0; i < risultatiAPI.length; i++) {
        var author = risultatiAPI[i]["author"];
        //HANDLEBARS
        if (autoreScelto == author) {
            renderAlbum(risultatiAPI, i);
        } else if (autoreScelto == "All") {
            renderAlbum(risultatiAPI, i);
        } 
    }
}

//processo handlebars
function renderAlbum(risultatiAPI, i) {
    var imgPath = risultatiAPI[i]["poster"];
    var title = risultatiAPI[i]["title"];
    var author = risultatiAPI[i]["author"];
    var year = risultatiAPI[i]["year"];
    var album = $("#album");
    var source = $("#album-template").html();
    var template = Handlebars.compile(source);
    var context = {
        src: imgPath,
        title: title,
        author: author,
        year: year
    };
    var html = template(context);
    album.append(html);
}