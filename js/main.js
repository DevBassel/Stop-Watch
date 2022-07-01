let q = (el) => document.querySelector(el);
let m_count = q('.watch .m');
let s_count = q('.watch .s');
let ms_count = q('.watch .ms');
let start = true;
q('.start').onclick = () => {
  if (start) {
    let str = setInterval(() => {
      update(ms_count, s_count);
q('.reset').onclick = ()=>{
  q('.stop-area').innerHTML = '';
  m_count.textContent = '00';
  ms_count.textContent = '00';
  s_count.textContent = '00';
  start = true;
  clearInterval(str);
}

    }, 10)
  }
  start = false;
}
let count = 1;

q('.add').onclick = () => {
  if(!start){
  count++;
  Add(ms_count.textContent, s_count.textContent, m_count.textContent)
  q('.stop-area').scrollTo({
    top: q('.stop-area').offsetHeight * count,
    behavior: 'smooth'
  })
}
}

function update(val, next) {
  val.textContent = +val.textContent + 1
  val.textContent <= 9 ? val.textContent = `0${val.textContent}` : '';
  if (val.textContent == 99) {
    next.textContent = +next.textContent + 1;
    next.textContent <= 9 ? next.textContent = `0${next.textContent}` : '';
    val.textContent = '00';
  }
  if (next.textContent == 59) {
    m_count.textContent = +m_count.textContent + 1;
    m_count.textContent <= 9 ? m_count.textContent = `0${m_count.textContent}` : '';
    s_count.textContent = '00';
  }

}


function Add(ms, s, m) {
  let div = document.createElement('div');
  div.className = 'stop';
  div.innerHTML = `
    <span class="s-m">${m}</span> :
    <span class="s-s">${s}</span> :
    <span class="s-ms">${ms}</span> 
    <span class="rm">X</span> 
  `;

  q('.stop-area').appendChild(div);

  document.querySelectorAll('.rm').forEach((el) =>
    el.onclick = () => {
      event.target.parentElement.remove()
    }

  )

}
