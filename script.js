function getHexMap(bounds) {
  var columns = [];
  for (var c = 0; c < bounds; c++) {
    var row = [];
    for (var r = 0; r < bounds; r++) {
      row.push(randomTile());
    }
    columns.push(row);
  }
  return columns;
}
    
function randomTile() {
  if (Math.floor(Math.random() * 3) == 0) {
    return "neut";
  }
  return "dark";
}

function populate(hexmap) {
  for (var x = 0; x < hexmap.length; x++) {
    var column = hexmap[x];
    for (var y = 0; y < column.length; y++) {
      
      var tile = placeTile(column[y], x, y);
      
      tile.bind("mouseover", function(event) {
        var message = "Plek (" 
            + $(this).data("row") + ", " 
            + $(this).data("column") + ")";
        $('#info').text(message);
      });
    }
  }
}

function placeTile(name, x, y) {
  var tile = $("." + name, "#templates").children().clone();
  tile.css("z-index", y*10+x%2*5);
  tile.hexMapPosition(x, y).appendTo($('#hexmap'));
  return tile;
}

(function($) {
  $.fn.hexMapPosition = function(row, column) {
    this.data({"row": row, "column": column});
    
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

