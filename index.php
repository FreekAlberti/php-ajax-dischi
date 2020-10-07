<?php
include "db.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div class="traccia">
    <?php foreach ($database as $album) { ?>
      <img src="<?php echo $album["poster"] ?>" alt="Copertina">
      <h3><?php echo $album["title"] ?></h3>
      <h4><?php echo $album["author"] ?></h4>
      <h4><?php echo $album["year"] ?></h4>
    <?php } ?>
  </div>
</body>
</html>
