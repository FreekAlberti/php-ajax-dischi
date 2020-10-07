<?php
include "db.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="dist/app.css">
  <title>Document</title>
</head>
<body>
  <header>
    <div class="container">
      <img class="logo" src="img/spotify.png" alt="">
    </div>
  </header>

  <section>
    <div class="container">
      <div class="wrapper">
        <?php foreach ($database as $album) { ?>
          <div class="traccia">
            <img class="copertina" src="<?php echo $album["poster"] ?>" alt="Copertina">
            <div class="testo">
              <h3><?php echo $album["title"] ?></h3>
              <h4><?php echo $album["author"] ?></h4>
              <h4><?php echo $album["year"] ?></h4>
            </div>
          </div>
        <?php } ?>
      </div>
    </div>
  </section>
</body>
</html>
