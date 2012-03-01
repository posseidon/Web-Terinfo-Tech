var worker = new Worker('worker.js');


worker.postMessage('');

worker.onmessage = function (event) {
  if (event.data && (event.data+"").match(/^log:/i)) {
    console.log(event.data.match(/^log:\s*(.*)/)[1]);
  } else {
    document.querySelector('#status').innerHTML = event.data;
  }
}