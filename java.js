var interval; 
$("signal").mousedown(function() {
    interval= setInterval(performWhileMouseDown, 100);
}).mouseup(function() {
    clearInterval(interval);
});
function performWhileMouseDown() {
    $("#static").append("document.getElementById(static).style.opacity = 1")
}

