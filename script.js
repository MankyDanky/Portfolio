window.onload = function () {
    window.onscroll = function() {scroll()};

    var header = document.getElementById("sticky-header");
    var sticky = header.offsetTop;

    function scroll() {
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

}