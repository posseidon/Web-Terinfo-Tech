var countdown;
var countdown_number;

function countdown_init() {
    countdown_number = 11;
    countdown_trigger();
}

function countdown_trigger() {
    if (countdown_number > 0) {
        countdown_number--;
        console.log(countdown_number);
        if (countdown_number > 0) {
            countdown = setTimeout(countdown_trigger, 1000);
        }
    }
}

function countdown_clear() {
    clearTimeout(countdown);
}
countdown_init();
/** KERDES */
if (countdown_number < 3) {
    countdown_clear();
}