const enlarge_in = document.getElementById('enlrg-txt-in');
const enlarge_btn = document.getElementById('enlrg-btn');

enlarge_btn.addEventListener('click', () => {
  if (enlarge_in.value == '') {
    alert('Please enter message.');
    throw new Error('Please enter message.');
  }
  let msg = enlarge_in.value;
  enlarge_in.value = '';
  document.body.innerHTML = `<span id="enlrg-txt-out">${msg}</span>`;
  enlarge_btn.removeEventListener('click', () => {});
});
