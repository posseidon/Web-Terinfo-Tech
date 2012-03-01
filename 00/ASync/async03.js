var starter;
var stopper;

function init() {
    starter = setInterval(start, 2000);
    stopper = setTimeout(stop, 8000);
}

function start() {
    var currentTime = new Date();
    console.log(currentTime.toString());
}

function stop() {
    clearInterval(starter);
    clearTimeout(stopper);
}
init();