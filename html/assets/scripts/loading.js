'use strict'
{
  const loading_start = document.getElementById('submit');
  const sp_loading_start = document.getElementById('sp_submit');
  const loading = document.getElementById('loading');
  const mask = document.getElementById('mask');
  const completion = document.getElementById('completion');
  const close = document.getElementById('close');
  loading_start.addEventListener('click', () =>{
    loading.classList.remove('hidden');
    completion.classList.remove('hidden');
    window.setTimeout(() => {
      loading.classList.add('hidden');
  }, 2000);
  });
  sp_loading_start.addEventListener('click', () =>{
    loading.classList.remove('hidden');
    completion.classList.remove('hidden');
    window.setTimeout(() => {
      loading.classList.add('hidden');
  }, 2000);
  });
  close.addEventListener('click', () =>{
    completion.classList.add('hidden');
    mask.classList.add('hidden');
  });
}