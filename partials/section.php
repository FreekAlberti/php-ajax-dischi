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
