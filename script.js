window.onload = function() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("scream");
    ctx.drawImage(img,10,10);
};

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var tile = document.getElementById('tile');

document.body.appendChild(canvas);

var render = function () {
	ctx.drawImage(tile, 0, 0);
	ctx.drawImage(tile, 10, 10);
	ctx.drawImage(tile, 100, 100);
	ctx.drawImage(tile, 10, 50);
	ctx.drawImage(tile, 200, 200);
};
for (i=0; i<200; i++) {
	render();
};
alert("klaar");