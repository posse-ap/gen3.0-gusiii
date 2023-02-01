<?php
  /* ドライバ呼び出しを使用して MySQL データベースに接続する */
  $dsn = 'mysql:dbname=posse;host=db';
  $user = 'root';
  $password = 'root';
//   処理の流れ
// ・questionテーブルを検索し、結果をquestion変数に格納する
// ・choicesテーブルを検索し、結果をchoices変数に格納する
  $dbh = new PDO($dsn, $user, $password, [
  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  ]);
  // $questions = $dbh->query("SELECT * FROM questions")->fetchAll(PDO::FETCH_ASSOC);
  // $choices = $dbh->query("SELECT * FROM choices")->fetchAll(PDO::FETCH_ASSOC);
// ・choices変数の全てを対象にループ処理を実施する
// ＜ここからループ choicesレコード数分＞
// ・choice変数のquestion_idをキーに、対応するquestion変数を検索
// ・検索されたquestion変数にchoice変数の内容を追加する
// ＜ここまでループ＞
