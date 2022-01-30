<?php
include 'backend.php';
$task = Sudoku::generate(9, Sudoku::NORMAL);
header('Content-type: application/json');
echo(json_encode($task));
?>