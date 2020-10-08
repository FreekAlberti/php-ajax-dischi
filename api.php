<?php
include "partials/db.php";


header("Content-Type: application/json");
echo json_encode($database);
?>