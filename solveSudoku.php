<?php
    include 'backend.php';
    $table = json_decode($_POST['tablero']);
    $solution = Sudoku::solve($table);
    header('Content-type: application/json');
    echo(json_encode($solution));
?>