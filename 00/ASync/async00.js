function setAlarm(message, timeout) {
    /** Define handle in the closure */
    function handle() {
        console.log(message);
    }
    setTimeout(handle, timeout);
}

/** Fire and forget! */
setAlarm("Wake UP!", 1000);
for (i = 0; i < 1000; i++) {
    console.log("Looping:" + i);
}