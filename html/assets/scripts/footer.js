'use strict'
{
  const prev = document.getElementById('prev');
  const date = document.getElementById('js-date');
  const d = new Date();
  const next = document.getElementById('next');
  date.innerHTML = (`${d.getFullYear()}年${d.getMonth() + 1}月 `);
//   date.innerHTML = (`2020年10月 `);
}