for (var i=1;i<=11;i++){
    document.write("<div class=\"slot\" id=\"slot-"+i+"\" onclick=\"slotSelected()\">"+i+"</div>");
    var pixel = String(90+((i-1)*45))+'px';
    document.getElementById('slot-'+i).style.top = pixel;
}
for (var i=12;i<=23;i++){
    document.write("<div class=\"slot\" id=\"slot-"+i+"\" onclick=\"slotSelected()\">"+i+"</div>");
    var pixel = String(225+((i-12)*60))+'px';
    document.getElementById('slot-'+i).style.left = pixel;
}
for (var i=24;i<=34;i++){
    document.write("<div class=\"slot\" id=\"slot-"+i+"\" onclick=\"slotSelected()\">"+i+"</div>");
    var leftPixel = String(225+((i-24)*60))+'px';
    document.getElementById('slot-'+i).style.left = leftPixel;
    var topPixel = String(180)+'px';
    document.getElementById('slot-'+i).style.top = topPixel;
}
for (var i=35;i<=45;i++){
    document.write("<div class=\"slot\" id=\"slot-"+i+"\" onclick=\"slotSelected()\">"+i+"</div>");
    var leftPixel = String(225+((i-35)*60))+'px';
    document.getElementById('slot-'+i).style.left = leftPixel;
    var topPixel = String(180+45+45)+'px';
    document.getElementById('slot-'+i).style.top = topPixel;
}
for (var i=46;i<=56;i++){
    document.write("<div class=\"slot\" id=\"slot-"+i+"\" onclick=\"slotSelected()\">"+i+"</div>");
    var leftPixel = String(225+((i-46)*60))+'px';
    document.getElementById('slot-'+i).style.left = leftPixel;
    var topPixel = String(180+45+45+45+45)+'px';
    document.getElementById('slot-'+i).style.top = topPixel;
}
for (var i=57;i<=67;i++){
    document.write("<div class=\"slot\" id=\"slot-"+i+"\" onclick=\"slotSelected()\">"+i+"</div>");
    var leftPixel = String(225+((i-57)*60))+'px';
    document.getElementById('slot-'+i).style.left = leftPixel;
    var topPixel = String(180+45+45+45+45+45+45)+'px';
    document.getElementById('slot-'+i).style.top = topPixel;
}
for (var i=68;i<=79;i++){
    document.write("<div class=\"slot\" id=\"slot-"+i+"\" onclick=\"slotSelected()\">"+i+"</div>");
    var leftPixel = String(165+((i-68)*60))+'px';
    document.getElementById('slot-'+i).style.left = leftPixel;
    var topPixel = String(180+45+45+45+45+45+45+45+45)+'px';
    document.getElementById('slot-'+i).style.top = topPixel;
}
for (var i=80;i<=90;i++){
    document.write("<div class=\"slot\" id=\"slot-"+i+"\" onclick=\"slotSelected()\">"+i+"</div>");
    var leftPixel = String(945)+'px';
    document.getElementById('slot-'+i).style.left = leftPixel;
    var topPixel = String(90+((i-80)*45))+'px';
    document.getElementById('slot-'+i).style.top = topPixel;
}