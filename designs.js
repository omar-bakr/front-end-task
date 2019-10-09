// Select color input
// Select size input
var row,column,color;
// When size is submitted by the user, call makeGrid()

$('#submit_button').click(function(event){
  event.preventDefault();
  row=$('#inputHeight').val();
  column=$('#inputWidth').val();
  makeGrid(row,column);
})
function makeGrid(row,column) {

  $('tr').remove();
  
  for(var i=0;i<row;i++){
    $('#pixelCanvas').append('<tr id=table'+i+'></tr>');
    for(var j=0;j<column;j++)
    {
      $('#table'+i).append('<td></td>');
    }

  }
  $('td').click(function coloring(){
    color=$('#colorPicker').val();

    if($(this).attr('style')){
      $(this).removeAttr('style')
    }
    else{
      $(this).attr('style','background-color:'+color);
    }
  })
 
}

    

