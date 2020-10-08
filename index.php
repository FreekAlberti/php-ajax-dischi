<!DOCTYPE html>
<html lang="en">
<!DOCTYPE html>
<html lang="en">
  <?php
  include "partials/head.php";
  ?>
<body>
<?php
  include "partials/header.php";
?>
    <section>
        <div class="container">
            <div class="wrapper">
                <div id="album" class="traccia">
                
                </div>
            </div>
        </div>
    </section>
        
    <script id="album-template" type="text/x-handlebars-template">
        <img class="copertina" src="{{src}}" alt="Copertina">
        <div class="testo">
            <h3>{{title}}</h3>
            <h4>{{author}}</h4>
            <h4>{{year}}</h4>
        </div>
    </script>

    <script src="dist/app.js"></script>
</body>
</html>