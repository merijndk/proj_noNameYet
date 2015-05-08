var tile_neut = document.getElementById('tile');
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");


var map = new Array(20);
for (i = 0; i < map.length; i++){
	map[i] = new Array(8);
}

for (j=0; j<map.length; j++){
   for(i=0; i<map[j].length; i++){
   		map[j][i] = {oil: 10, gold: 10, image: tile_neut};
   }
}

var callback = function() {
   for (j=0; j<map.length; j++){
   for(i=0; i<map[j].length; i++){
   		var img = map[j][i].image;
   		ctx.drawImage(img, (j%2) * img.width *3 / 4 + (img.width + 42) * i, img.height / 3 * j);
   }
}
   
}


   callback();

   object.onclick=function(){myScript};