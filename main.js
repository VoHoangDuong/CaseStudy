var counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);

var m = document.querySelector("full-slides"),
    h = document.querySelector("header"),
    hHeight;

function setTopPadding() {
    hHeight = h.offsetHeight;
    m.style.paddingTop = hHeight + "px";
}

function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
        var y = window.pageYOffset;
        if (y > 150) {
            h.classList.add("scroll");
        } else {
            h.classList.remove("scroll");
        }
    }
}

window.onload = function () {
    setTopPadding();
    onScroll();
};

window.onresize = function () {
    setTopPadding();
};

window.addEventListener("scroll", callbackFunc);

window.addEventListener("scroll", _.throttle(callbackFunc, 200));
