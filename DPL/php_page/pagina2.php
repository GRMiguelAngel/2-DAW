<?php

echo "pagina 2";

print_r($_GET);

header("location: pagina3.phpname=" . $_GET["name"]);

?>