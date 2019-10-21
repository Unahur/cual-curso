<?php

$materia = $_POST['materia'];
$descripcion = $_POST['descripcion'];
$duracion = $_POST['duracion'];
$horasT = $_POST['horasT'];
$horasC = $_POST['horasC'];

if($materia === '' || $descripcion=== ''|| $duracion=== ''|| $horasT=== ''|| $horasC=== ''){
    echo json_encode('error');
}else{
    echo json_encode('Correcto: <br>Materia:'.$materia.'<br>Descripcion:'.$descripcion.'<br>Duracion:'.$duracion.'<br>Horas Totales:'.$horasT.'<br>Horas Cursadas:'.$horasC);
}