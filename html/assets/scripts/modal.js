"use strict";
console.log('aaaaaaa');

  const open = document.getElementById("open");
  const spopen = document.getElementById("sp_open");
  const submit = document.getElementById("submit");
  // const spsubmit = document.getElementById("submit");
  const loading = document.getElementById('loading');
  const modal = document.getElementById("modal");
  const mask = document.getElementById("mask");
  const modalclose = document.getElementById("modal_close");

  open.addEventListener("click", () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });

  spopen.addEventListener("click", () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });

  // submit.addEventListener('click',() =>{
  //   modal.classList.add('hidden');
  // });

  mask.addEventListener("click", () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    loading.classList.add('hidden');
  });

  modalclose.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });

{
  const studyDate = document.getElementById("js-studydate");
  // studyDate.innerHTML =
  //   '<input type="text" name="today" id="calendarTEST" value="YYYY-MM-DD" class="study_date_box" required><div class="err_text" id="err_textbox_calendar"></div>';
  studyDate.innerHTML =
    '<button name="today" id="calendar_open" value="YYYY-MM-DD" class="study_date_box" required><div class="err_text" id="err_textbox_calendar"></div>';
  // const config = {
  //   maxDate: "today"
  // }
  // flatpickr('#calendarTEST',config);
  // flatpickr.localize(flatpickr.l10ns.ja);
  // flatpickr('#calendarTEST');
//   var fp = flatpickr(calendarTEST, {
//     // dateFormat: 'Y-n-j(l)' ,// フォーマットの変更]
//     altInput: true,
//     altFormat: "Y年n月j日",
//     minDate: new Date().fp_incr(-7), //7日前から
//     maxDate:"today",
// });
$(function(){
  $(".study_date_box").bind("blur", function() {
    var _textbox = $(this).val();
    check_textbox(_textbox);
  });
});

function check_textbox(str){
  $("#err_textbox_calendar p").remove();
  var _result = true;
  var _textbox = $.trim(str);

  if(_textbox.match(/^[ 　\r\n\t]*$/)){
    $("#err_textbox_calendar").append("<p><i class=\"fa fa-exclamation-triangle\"></i>学習日を入力してください。</p>");
    _result = false;
  }
  return _result;
}
}
{
  //配列.map  record=配列の一個一個取り出した returnー recordの中のcontentを取り出す
  //機能にする。引数にすると綺麗にできます
  const Contents = contents.map(function(record){
    return record.content
  });
  // const Contents = ['N予備校','ドットインストール','POSSE課題'];
  const studyContent = document.getElementById("js-studycontents");
  Contents.forEach(
    (element, index) =>
      (studyContent.innerHTML += `<input type="checkbox" name="contents" id="content${index}" class="study_selection_box check_c"><label for="content${index}">${element}</label>`)
  );
  $(function(){
    $("input[name='contents']").bind("change", function(){
      check_checkbox();
    });
  });
  
  function check_checkbox(){
    $("#err_checkbox_content p").remove();
    var _result = true;
    var _check_count = 0;
  
    $("input[type='checkbox']").each(function(){
      if($(this).prop('checked')){
        _check_count = _check_count+1;
      }
    });
    if(_check_count == 0){
      $("#err_checkbox_content").append("<p><i class=\"fa fa-exclamation-triangle\"></i>学習コンテンツを1つ以上選択してください。</p>");
      _result = false;
    }
    return _result;
  }
}
{
  const Languages = languages.map(function(record){
    return record.language
  });
  const studyLanguage = document.getElementById("js-studylanguages");
  Languages.forEach(
    (element, index) =>
      (studyLanguage.innerHTML += `<input type="checkbox" name="langs" id="language${index}" class="study_selection_box check_l"><label for="language${index}">${element}</label>`)
  );
  $(function(){
    $("input[name='langs']").bind("change", function(){
      check_checkbox();
    });
  });
  
  function check_checkbox(){
    $("#err_checkbox_lang p").remove();
    var _result = true;
    var _check_count = 0;
  
    $("input[type='checkbox']").each(function(){
      if($(this).prop('checked')){
        _check_count = _check_count+1;
      }
    });
    if(_check_count == 0){
      $("#err_checkbox_lang").append("<p><i class=\"fa fa-exclamation-triangle\"></i>学習言語を1つ以上選択してください。</p>");
      _result = false;
    }
    return _result;
  }
}
{
  const studyTime = document.getElementById("js-studytime");
   studyTime.innerHTML =
     '<input type="text" class="input-numeric study_time_box" name="time" maxlength="1" inputmode="numeric" id="jq-timebox"><div class="err_text" id="err_textbox_time"></div>';
  let time = '';
  for (let i = 1; i <= 24; i++){
    {
    time +=
    
    `<option value="${i}">${i}</option>`
    ;
    }
    studyTime.innerHTML = `<select name="time" id="studyTime" class="study_time">` +time+`</select><i>h</i>`
  };

    $(function(){
      $("#jq-timebox").bind("blur", function() {
        var _textbox = $(this).val();
        check_textbox(_textbox);
      });
    });
    
    function check_textbox(str){
      $("#err_textbox_time p").remove();
      var _result = true;
      var _textbox = $.trim(str);
    
      if(_textbox.match(/^[ 　\r\n\t]*$/)){
        $("#err_textbox_time").append("<p><i class=\"fa fa-exclamation-triangle\"></i>テキストボックスを入力してください。</p>");
        _result = false;
      }
      return _result;
    }

(function(){
  if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
  const filter = function(e){
      let v = e.target.value
          .replace(/[０-９]/g, function(x){ return String.fromCharCode(x.charCodeAt(0) - 0xFEE0) })
          .replace(/[^0-9]/g, '');
      e.target.value = v;
  };

  let isComposing = false; // IE11対応が不要の場合は InputEvent.isComposing が使用できます。
  document.addEventListener('input', function(e){
      if (!isComposing && e.target.matches("input.input-numeric")) filter(e)
  });
  document.addEventListener('compositionstart', function(e){
      if (e.target.matches("input.input-numeric")) {
          isComposing = true;
      }
  });
  document.addEventListener('compositionend', function(e){
      if (e.target.matches("input.input-numeric")) {
          isComposing = false;
          setTimeout(function(){ filter(e) }, 0);
      }
  });
})();
}
{
  const studyComment = document.getElementById("js-studycomment");
  studyComment.innerHTML =
    '<textarea name="text" minlength="1" maxlength="140" class="study_comment_box" id="js_tweet" rows=”3″ cols=”50″ wrap=”hard” required></textarea>';
}
{
  const submit = document.getElementById("submit");
  const spsubmit = document.getElementById("sp_submit");
  const studyTwitter = document.getElementById("js-studytwitter");
  studyTwitter.innerHTML = `<input type="checkbox" name="share" id="twitter_share"><label class="twitter_share_textbox" for="twitter_share" required>Twitterにシェアする</label>`;

  const chk3 = document.getElementById("twitter_share");
  
  chk3.addEventListener("change", function(){
    if (this.checked) {
      console.log("twitterにシェアします");
      chk3.classList.add("tweet");
      const tweetUrl = "https://twitter.com/intent/tweet?text="+ encodeURIComponent(document.getElementById("js_tweet").value)
      null;
      submit.addEventListener("click", () => {
      window.location.href = tweetUrl;
      // window.open = tweetUrl;
    });
      spsubmit.addEventListener("click", () => {
      window.location.href = tweetUrl;
    });
  }
  });
}

function isCheck() {
  let arr_checkBoxes_c = document.getElementsByClassName("check_c");
  let arr_checkBoxes_l = document.getElementsByClassName("check_l");
  let count_c = 0;
  let count_l = 0;
  for (let i = 0; i < arr_checkBoxes_c.length; i++) {
      if (arr_checkBoxes_c[i].checked) {
          count_c++;
      }
  }
  for (let i = 0; i <arr_checkBoxes_l.length; i++) {
      if (arr_checkBoxes_l[i].checked) {
          count_l++;
      }
  }
  if (count_c > 0 && count_l >0 ) {
      modal.classList.add('hidden');
      return true;
  } else {
      window.alert("学習コンテンツと学習言語を各々1つ以上選択してください。");
      return false;
  };
}