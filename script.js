function getHexMap(bounds) {
  var columns = [];
  for (var c = 0; c < bounds; c++) {
    var row = [];
    for (var r = 0; r < bounds; r++) {
      row.push(generateTile());
    }
    columns.push(row);
  }
  return columns;
}
    
function generateTile() {
  if (Math.floor(Math.random() * 3) == 0) {
    return {"color": "light", "oil": Math.floor(Math.random()*10)+1};
  }
  return {"color": "dark", "oil": Math.floor(Math.random()*10)+1};
}

function populate(hexmap) {
  for (var x = 0; x < hexmap.length; x++) {
    var column = hexmap[x];
    for (var y = 0; y < column.length; y++) {
      var cell = column[y];
      var tile = placeTile(cell, x, y);
      
      tile.bind("mouseover", function(event) {
        var message = "(" 
            + $(this).data("row") + ", " 
            + $(this).data("column") + ", color: "
						+ $(this).data("color") + ", oil: "
						+ $(this).data("oil") + ")";
						
        $('#info').text(message);
      });
    }
  }
}

function placeTile(cell, x, y) {
  var tile = $("." + cell.color, "#templates").children().clone();
  tile.css("z-index", y*10+x%2*5);
  tile.hexMapPosition(cell, x, y).appendTo($('#hexmap'));
  return tile;
}

(function($) {
  $.fn.hexMapPosition = function(cell, row, column) {
    this.data(cell);
		this.data("row", row);
		this.data("column", column);
    
    var tile_width = this.attr("width");
    var tile_height = this.attr("height");
   	var y_offset = tile_height/3;
    var x_offset = tile_width/4;
    var xpos = 0 + (row * (tile_width - x_offset));
    var ypos = 0 + (column * tile_height*11/16);
      
     ypos += 40; 
    
    if (row % 2 == 0) {
      ypos -= y_offset;
    }
    
    var style = {"position": "absolute", 
                 "top": ypos, "left": xpos};
    
    return this.css(style);
  }
})(jQuery);


populate(getHexMap(8));

