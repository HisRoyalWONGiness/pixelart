// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
console.log('makeGrid is running!')
  
  // Select size input
  
  var canvas, cell, gridHeight, gridWidth, rows;
  
  canvas = $('#pixel-canvas');
  gridHeight = $('#input-height').val();
  gridWidth = $('#input-weight').val();
  canvas.children().remove()
  
  for (x = 0; x < gridHeight; x++) {
  canvas.append('<tr></tr>');
  }
  
  rows = $('tr');
  
  for (y = 0; y < gridWidth; y++) {
  rows.append('<td></td>');
  } 
  
  cell = canvas.find('td');
  
  // When td is clicked by the user, change color of td
  cell.click(function() {
    // Select color input
    console.log("change-color is running!");
    var color;
    color = $("#color-picker").val();

   if ($(this).attr('style')) { 
              $(this).removeAttr('style')
          }else {
              $(this).attr('style', 'background-color:' + color);
          }
  })

  };

 
// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('#size-picker')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});

// getting the help slide down
$('#info').on('click', function() {
  $('.info-panel').slideDown();
});

// closing the info Panel
$('.close-help').click(function() {
  $('.info-panel').slideUp();
});
