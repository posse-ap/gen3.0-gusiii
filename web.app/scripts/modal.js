"use strict";

{
  const open = document.getElementById("open");
  const submit = document.getElementById("submit");
  const modal = document.getElementById("modal");
  const mask = document.getElementById("mask");
  const modalclose = document.getElementById("modal_close");

  open.addEventListener("click", () => {
    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  });

  submit.addEventListener('click',() =>{
    modal.classList.add('hidden');
  });

  mask.addEventListener("click", () => {
    submit.click();
  });

  modalclose.addEventListener("click", () => {
    modal.classList.add("hidden");
    mask.classList.add("hidden");
  });
}
{
  const studyDate = document.getElementById("js-studydate");
  studyDate.innerHTML =
    '<input type="date" name="today" value="2020-10-27" min="2020-01-01" max="2020-12-31" class="study_date_box">';
}
{
  const Contents = ["N予備校", "ドットインストール", "POSSE課題"];
  const studyContent = document.getElementById("js-studycontents");
  Contents.forEach(
    (element, index) =>
      (studyContent.innerHTML += `<input type="checkbox" name="contents" id="content${index}" class="study_selection_box"><label for="content${index}">${element}</label>`)
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
      (studyLanguage.innerHTML += `<input type="checkbox" name="contents" id="language${index}" class="study_selection_box"><label for="language${index}">${element}</label>`)
  );
}
{
  const studyTime = document.getElementById("js-studytime");
  studyTime.innerHTML =
    '<input type="number" name="time" min="0" max="24" class="study_time_box">';
}
{
  const studyComment = document.getElementById("js-studycomment");
  studyComment.innerHTML =
    '<input type="text" name="text" minlength="1" maxlength="140" class="study_comment_box">';
}
{
  const submit = document.getElementById("submit");
  const studyTwitter = document.getElementById("js-studytwitter");
  studyTwitter.innerHTML = `<input type="checkbox" name="share" id="twitter_share"><label for="twitter_share">Twitterにシェアする</label>`;

  const chk3 = document.getElementById("twitter_share");
  chk3.addEventListener("click", () => {
    if (chk3.checked) {
      console.log("twitterにシェアします");
      chk3.classList.add("tweet");
      const tweetUrl = "https://twitter.com/intent/tweet";
    

    submit.addEventListener("click", () => {
      window.location.href = tweetUrl;
      
    });
  }
  });

}
