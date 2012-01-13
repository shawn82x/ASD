<?php
header('Content-Type: text/plain'); 
$csv = file_get_contents('list3.csv'); 
echo $csv;
?> 
