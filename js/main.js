let btn = document.querySelector('.btn');

// ===== Работа кнопки "Наверх" =====
window.addEventListener('scroll', ()=>{
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = window.scrollY;
  if(scrollHeight > clientHeight) {
    btn.classList.remove('hidden');
    console.log(scrollHeight);
  }
  else {
    btn.classList.add('hidden');
  }
})