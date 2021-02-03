function fly() {
    var bird = document.getElementById('birds');
    var pos = -185;
    var myInterval = setInterval(frame, 25);

    function frame() {
        if (pos == 1500) {
            clearInterval(myInterval);
            fly();
        } else {
            pos++;
            bird.style.left = pos + "px";
        }
    }
}