const Handlebars = require("handlebars");
const $ = require("jquery");

$(document).ready(function() {
    chiamataAjax();
    sceltaAutore();
 });

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

function renderDB(risultatiAPI) {
    for (var i = 0; i < risultatiAPI.length; i++) {
        var imgPath = risultatiAPI[i]["poster"];
        var title = risultatiAPI[i]["title"];
        var author = risultatiAPI[i]["author"];
        var year = risultatiAPI[i]["year"];
        var album = $("#album");
        var selezione = $("#select-author");
        //HANDLEBARS
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

        //HANDLEBARS
        var source = $("#author-template").html();
        var template = Handlebars.compile(source);
        var context = {
            author: author
        };
        var html = template(context);
        selezione.append(html);
    }
}

// function sceltaAutore() {
//     var selettore = $("#select-author");
//     selettore.change(function() {
//         $(this).val();
//     })
// }