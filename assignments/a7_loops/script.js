function setOpacity(imageid, opacity) {
    var s = document.getElementById(imageid).style;
    s.opacity = opacity / 100;
    s.MozOpacity = opacity / 100;
    s.KhtmlOpacity = opacity / 100;
    s.filter = 'alpha(opacity=' + opacity + ')';
}

setOpacity('man', 50);
