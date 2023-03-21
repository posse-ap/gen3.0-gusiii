<?php
declare(strict_types = 1);

// PDOの設定を呼び出す
require('./pdo.php');

// 今日の学習時間
$today_stmt = $pdo->query('SELECT study_time FROM studies WHERE study_date = CURDATE()');
$today = $today_stmt->fetch();

// 今月の学習時間
$month_stmt = $pdo->query("SELECT SUM(study_time) FROM studies WHERE DATE_FORMAT(study_date, '%M/%Y') = DATE_FORMAT(now(), '%M/%Y') and study_date < CURDATE()");
$month = $month_stmt->fetch();

// 今までの合計時間
$total_stmt = $pdo->query('SELECT SUM(study_time) FROM studies WHERE study_date < CURDATE()');
$total = $total_stmt->fetch();

//コンテンツをとってくる
$content_stmt = $pdo->query('SELECT content FROM contents');
$content = $content_stmt->fetchAll();
$content = json_encode($content);

//言語をとってくる
$language_stmt = $pdo->query('SELECT language FROM languages');
$language = $language_stmt->fetchAll();
$language = json_encode($language);

//学習時間をとってくる
$study_times_stmt = $pdo->query(
  'SELECT study_time FROM studies'
);
$study_times = $study_times_stmt->fetchAll();
$study_times = json_encode($study_times);

//学習日をとってくる
$study_dates_stmt = $pdo->query(
  'SELECT study_date FROM studies'
);
$study_dates = $study_dates_stmt->fetchAll();
$study_date = array_map(function($record){
  return mb_substr($record['study_date'],8,2);
},$study_dates);
//mb_substr string切り出す
$study_date = json_encode($study_date);

//コンテンツごとに学習時間をとってくる
$content_times_stmt = $pdo->query(
  'SELECT content_id,sum(study_time) as CT FROM studies group by content_id ORDER BY content_id'
);
$content_times = $content_times_stmt->fetchAll();
$content_times = json_encode($content_times);

// 言語ごとに学習時間をとってくる
$language_times_stmt = $pdo->query(
  'SELECT language_id,sum(study_time) as LT FROM studies group by language_id ORDER BY language_id'
);
$language_times = $language_times_stmt->fetchAll();
$language_times = json_encode($language_times);
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js?ver=1.11.3'></script>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  <link rel="stylesheet" href="./assets/styles/reset.css">
  <link rel="stylesheet" href="./assets/styles/style.css">

</head>

<body>

  <!-- header window -->
  <header>
    <div class="header_inner">
      <img src="./assets/img/logo.svg" alt="POSSE">
      <span>4th week</span>
    </div>
    <button id="open">記録・投稿</button>
  </header>

  <!-- modal window -->
  <div id="mask" class="hidden"></div>
  <article id="modal" class="hidden">
    <span id="modal_close" class="material-symbols-outlined">
      close</span>
    <section class="study_container">
      <div class="study_inner">
        <div class="study_date">
          <legend class="study_title">学習日</legend>
          <div id="js-studydate"></div>
        </div>
        <div class="study_contents">
          <legend class="study_title">学習コンテンツ(複数選択可)</legend>
          <div id="js-studycontents" class="study_data_check"></div>
          <div class="err_text" id="err_checkbox_content"></div>
        </div>
        <div class="study_language">
          <legend class="study_title">学習言語(複数選択可)</legend>
          <div id="js-studylanguages" class="study_data_check"></div>
          <div class="err_text" id="err_checkbox_lang"></div>
        </div>
      </div>
      <div class="study_inner">
        <div class="study_time">
          <legend class="study_title">学習時間</legend>
          <div id="js-studytime"></div>
        </div>
        <div class="study_comment">
          <legend class="study_title">Twitter用コメント</legend>
          <div id="js-studycomment"></div>
        </div>
        <div class="study_twitter">
        </div>
        <div class="study_twitter">
          <div id="js-studytwitter" class="study_data_check"></div>
        </div>
      </div>
      <button type="submit" id="sp_submit" class="sp_button" onClick="return isCheck()">記録・投稿</button>
    </section>
    <div class="submit_button"><button type="submit" id="submit" onClick="return isCheck()">記録・投稿</button></div>
  </article>

  <!-- loading window -->
  <section id="loading" class="hidden">
    <span class="circle"></span>
  </section>

  <!-- completion window -->
  <section id="completion" class="hidden">
    <span id="close" class="material-symbols-outlined">close</span>
    <div class="completion_inner">
      <span>AWESOME!</span>
      <img class="completion_check" src="./assets/img/check_mark-2.png" alt="checkmark">
      <p>記録・投稿<br>完了しました</p>
    </div>
  </section>

  <!-- main  -->
  <main class="learning">
    <section class="learning_record">
      <div class="learning_record_numbers">
        <div class="learning_record_numbers_today">
          <ul>
            <li class="title">Today</li>
            <li class="number"><?= $today['study_time']; ?></li>
            <li class="hour">hour</li>
          </ul>
        </div>
        <div class="learning_record_numbers_month">
          <ul>
            <li class="title">Month</li>
            <li class="number"><?= $month['SUM(study_time)']; ?></li>
            <li class="hour">hour</li>
          </ul>
        </div>
        <div class="learning_record_numbers_total">
          <ul>
            <li class="title">Total</li>
            <li class="number"><?= $total['SUM(study_time)']; ?></li>
            <li class="hour">hour</li>
          </ul>
        </div>
      </div>
      <div class="learning_record_graph">
        <canvas id="time_chart">
          Canvas not supported...
        </canvas>
      </div>
    </section>
    <section class="learning_function">
      <div class="learning_function_lang">
        <span class="learning_function_title">学習言語</span>
        <div class="chart-inner">
          <canvas id="language_chart">
            Canvas not supported...
          </canvas>
        </div>
      </div>
      <div class="learning_function_contents">
        <span class="learning_function_title">学習言語</span>
        <div class="chart-inner">
          <canvas id="content_chart"></canvas>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="footer_container">
      <span id="prev" class="material-symbols-outlined">
        navigate_before
      </span>
      <div id="js-date"></div>
      <span id="next" class="material-symbols-outlined">
        navigate_next
      </span>
    </div>
  </footer>
  <button id="sp_open" class="sp_button">記録・投稿</button>

  <!-- 下のmodal.js・graph.jsで読み込むための定数設定 -->
<script>
  const contents = JSON.parse('<?= $content ?>');
  const languages = JSON.parse('<?= $language ?>');
  const study_times = JSON.parse('<?= $study_times ?>');
  const study_date = JSON.parse('<?= $study_date ?>');
  const contenttimes = JSON.parse('<?= $content_times ?>');
  const languagetimes = JSON.parse('<?= $language_times ?>');
</script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/ja.js"></script>
  <script src="./assets/scripts/modal.js"></script>
  <script src="./assets/scripts/loading.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
  <script src="./assets/scripts/graph.js"></script>
  <script src="./assets/scripts/footer.js"></script>
</body>

</html>