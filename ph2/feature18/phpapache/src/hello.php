<! DOCTYPE html>
<html>
<head>
<meta charset="UTf-8">
<title>PHPの基本</title>
</head>
<body>
<?php
// print命令は指定された文字列を表示するための命令です。
// print 'こんにちは、世界！<br />';
// print 'こんにちは。皆さん！';

// 2.1.4
// $x = 'title';
// $title = 'PHP:Hypertext Preprocessor';
// print $$x ;

// 2.2.1
// const TAX = 1.1;
// $price = 1000;
// $sum = $price * TAX;
// print $sum;   //結果→1100

define('TAX',1.1);
define('price',1000);
define('sum',TAX*price);
print sum;   //define関数を利用して、2.2.1をやってみた


?>
</body>
</html>