"use strict";


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
  studyDate.innerHTML =
    '<input type="text" name="today" id="calendarTEST" value="YYYY-MM-DD" class="study_date_box">';
  flatpickr.localize(flatpickr.l10ns.ja);
  flatpickr('#calendarTEST');
}
{
  const Contents = ["N予備校", "ドットインストール", "POSSE課題"];
  const studyContent = document.getElementById("js-studycontents");
  Contents.forEach(
    (element, index) =>
      (studyContent.innerHTML += `<input type="checkbox" name="contents" id="content${index}" class="study_selection_box check_c"><label for="content${index}">${element}</label>`)
  );
}
{
  const Languages = [
    "HTML",
    "CSS",
    "Javascript",
    "PHP",
    "Laravel",
    "SQL",
    "SHELL",
    "情報システム基礎知識(その他)",
  ];
  const studyLanguage = document.getElementById("js-studylanguages");
  Languages.forEach(
    (element, index) =>
      (studyLanguage.innerHTML += `<input type="checkbox" name="contents" id="language${index}" class="study_selection_box check_l"><label for="language${index}">${element}</label>`)
  );
}
{
  const studyTime = document.getElementById("js-studytime");
  studyTime.innerHTML =
    '<input type="number" name="time" min="1" max="24" class="study_time_box" required>';
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
  studyTwitter.innerHTML = `<input type="checkbox" name="share" id="twitter_share"><label for="twitter_share" required>Twitterにシェアする</label>`;

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
  for (let i = 0; i < arr_checkBoxes_l.length; i++) {
      if (arr_checkBoxes_l[i].checked) {
          count_l++;
      }
  }
  if (count_c > 0 && count_l >0) {
      modal.classList.add('hidden');
      return true;
      
  } else {
      window.alert("学習コンテンツと学習言語を各々1つ以上選択してください。");
      return false;
  };
}

