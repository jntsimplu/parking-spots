for (var i = 1; i <= 9; i++) {
    document.write("<div class=\"slot\" id=\"" + i + "\" onclick=\"slotSelected()\"> <span class='nbr-spot'>" + i + "</span></div>");
    var pixel = String(140 + ((i - 1) * 45)) + 'px';
    document.getElementById(i).style.top = pixel;
}
for (var i = 10; i <= 20; i++) {
    document.write("<div class=\"slot\" id=\"" + i + "\" onclick=\"slotSelected()\"><span class='nbr-spot'>" + i + "</span></div>");
    var pixel = String(225 + ((i - 10) * 60)) + 'px';
    document.getElementById(i).style.left = pixel;
}
for (var i = 21; i <= 30; i++) {
    document.write("<div class=\"slot\" id=\"" + i + "\" onclick=\"slotSelected()\"><span class='nbr-spot'>" + i + "</span></div>");
    var leftPixel = String(225 + ((i - 21) * 60)) + 'px';
    document.getElementById(i).style.left = leftPixel;
    var topPixel = String(185) + 'px';
    document.getElementById(i).style.top = topPixel;
}
for (var i = 31; i <= 40; i++) {
    document.write("<div class=\"slot\" id=\"" + i + "\" onclick=\"slotSelected()\"><span class='nbr-spot'>" + i + "</span></div>");
    var leftPixel = String(225 + ((i - 31) * 60)) + 'px';
    document.getElementById(i).style.left = leftPixel;
    var topPixel = String(185 + 45 + 45) + 'px';
    document.getElementById(i).style.top = topPixel;
}
for (var i = 41; i <= 50; i++) {
    document.write("<div class=\"slot\" id=\"" + i + "\" onclick=\"slotSelected()\"><span class='nbr-spot'>" + i + "</span></div>");
    var leftPixel = String(225 + ((i - 41) * 60)) + 'px';
    document.getElementById(i).style.left = leftPixel;
    var topPixel = String(185 + 45 + 45 + 45 + 45) + 'px';
    document.getElementById(i).style.top = topPixel;
}
for (var i = 51; i <= 60; i++) {
    document.write("<div class=\"slot\" id=\"" + i + "\" onclick=\"slotSelected()\"><span class='nbr-spot'>" + i + "</span></div>");
    var leftPixel = String(225 + ((i - 51) * 60)) + 'px';
    document.getElementById(i).style.left = leftPixel;
    var topPixel = String(185 + 45 + 45 + 45 + 45 + 45 + 45) + 'px';
    document.getElementById(i).style.top = topPixel;
}
for (var i = 61; i <= 71; i++) {
    document.write("<div class=\"slot\" id=\"" + i + "\" onclick=\"slotSelected()\"><span class='nbr-spot'>" + i + "</span></div>");
    var leftPixel = String(165 + ((i - 61) * 60)) + 'px';
    document.getElementById(i).style.left = leftPixel;
    var topPixel = String(180 + 45 + 45 + 45 + 45 + 45 + 45 + 45 + 45) + 'px';
    document.getElementById(i).style.top = topPixel;
}
for (var i = 72; i <= 80; i++) {
    document.write("<div class=\"slot\" id=\"" + i + "\" onclick=\"slotSelected()\"><span class='nbr-spot'>" + i + "</span></div>");
    var leftPixel = String(885) + 'px';
    document.getElementById(i).style.left = leftPixel;
    var topPixel = String(140 + ((i - 72) * 45)) + 'px';
    document.getElementById(i).style.top = topPixel;
}
