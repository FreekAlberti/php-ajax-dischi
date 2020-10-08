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
        console.log(risultatiAPI);
    },
    "error": function (richiesta, stato, errori) {
        console.log(errori);
    }
    }
);
}