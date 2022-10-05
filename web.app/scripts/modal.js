'use strict'

{
  const open =document.getElementById('open');
  const submit =document.getElementById('submit');
  const modal =document.getElementById('modal');
  const mask =document.getElementById('mask');
  const modalclose = document.getElementById('modal_close');

  open.addEventListener('click',() =>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  submit.addEventListener('click',() =>{
    modal.classList.add('hidden');
  });

  mask.addEventListener('click',() =>{
    submit.click();
  });

  modalclose.addEventListener('click', () =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  })
}

