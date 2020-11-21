function increment() {
  var data = document.getElementById('change').innerText;
  document.getElementById('change').innerText = parseInt(data) + 1;
}
function decrement() {
  var data = document.getElementById('change').innerText;
  document.getElementById('change').innerText = parseInt(data) - 1;
}
