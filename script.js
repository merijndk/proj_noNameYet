function createMap(bounds) {
  var table = [];
  for (var c = 0; c < bounds; c++) {
    var row = [];
    for (var r = 0; r < bounds; r++) {
      row.push(generateTile());
    }
    table.push(row);
  }
  return table;
}
    
function generateTile() {
  if (Math.floor(Math.random() * 3) == 0) {
    return {"color": "light", "oil": Math.floor(Math.random()*10)+1};
  }
  return {"color": "dark", "oil": Math.floor(Math.random()*10)+1};
}


$( "#login" ).click(function() {
  var naam = document.getElementById('naam').value;
  alert( naam );
  writeHighscore(naam);
});

function writeHighscore(naam){
	if (naam) {
		var xmlhttp;
		if (!isallowed(naam)) {
			writeHighscore();
		} else { 
			if (window.XMLHttpRequest) { //IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else { //IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("GET","ins.php?naam="+naam,false);
			xmlhttp.send(null);
		}
	}
};
var map = createMap(8);
