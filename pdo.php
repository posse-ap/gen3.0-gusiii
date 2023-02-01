<?php

//PDOの設定
$dsn='mysql:host=db;dbname=webapp;charset=utf8';
$user='root';
$password='9999';

try{

  $pdo = new PDO($dsn,$user,$password,[
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);

} catch(PDOException $e){
  echo '接続失敗' . $e->getMessage();
  exit();
}