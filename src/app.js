const Handlebars = require("handlebars");
const $ = require("jquery");

$(document).ready(function() {
    chiamataAjax();
 });

function chiamataAjax() {
$.ajax(
    {
    "url": "http://localhost/php-ajax-dischi/api.php",
    "method": "GET",
    "success": function (data) {
        var risultatiAPI = data;
        renderDB(risultatiAPI);
        console.log(risultatiAPI.length);
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
        console.log(imgPath);
        console.log(title);
        console.log(author);
        console.log(year);
    }
    var album = $("#album");
    var source = $("#album-template").html();
    var template = Handlebars.compile(source);
    var context = { 
        title: "My New Post",
        body: "This is my first post!" 
    };
    var html = template(context);
    album.append(html);
}