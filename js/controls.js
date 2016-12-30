$(document).ready(function(){
    $('body').on('mousedown', '#move-controls a', function(e){
      $(this).addClass('btn-success');
      var direction = $(this).prop('id').split('-')[1];


      $.ajax({
        url: "actions/move.php",
        method: "POST",
        data: { direction: direction },
        dataType: 'text',
        mimeType: 'text/plain; charset=x-user-defined'
      })
      .done(function( data ) {
        $('#move-status').html(direction);
      });

      e.preventDefault();

    });

    $('body').on('mouseup, mouseleave', '#move-controls a', function(e){
      $(this).removeClass('btn-success');
      $.ajax({
        url: "actions/move.php",
        method: "POST",
        data: { direction: 'stop' },
        dataType: 'text',
        mimeType: 'text/plain; charset=x-user-defined'
      })
      .done(function( data ) {
        $('#move-status').html('STOPPED');
      });

      e.preventDefault();

    });

    $('body').on('mousedown', '#look-controls a', function(e){
      look($(this));
      e.preventDefault();
    });

    $('body').on('mousedown', '#analog-move', function(evt){
      var clicked = document.getElementById('analog-move').getBoundingClientRect();

      var x = (180 - ((evt.clientX - clicked.left) / 2)).toFixed(0);
      var y = ((evt.clientY - clicked.top) / 2).toFixed(0);

      $.ajax({
        url: "actions/analog-look.php",
        method: "POST",
        data: { x: x, y: y },
        dataType: 'text',
        mimeType: 'text/plain; charset=x-user-defined'
      })
      .done(function(data){
        $('#analog_cam_x').text(x);
        $('#analog_cam_y').text(y);
      });

    });
});

function look(object){
  var axis = object.data('axis');
  var direction = object.data('direction');
  var type = 'step';

  if(object.prop('id') == 'look-reset'){
    value = 'reset';
    $('#cam_x').text(90);
    $('#cam_y').text(90);
  } else{
    if(direction == 'positive'){
      var value = parseInt($('#cam_'+axis).text()) + 10;
    } else{
      var value = parseInt($('#cam_'+axis).text()) - 10
    }

    if(value > 180 || value < 0){
      return false;
    }
    $('#cam_'+axis).text(value);
  }


  $.ajax({
    url: "actions/look.php",
    method: "POST",
    data: { axis: axis, value: value, type: type },
    dataType: 'text',
    mimeType: 'text/plain; charset=x-user-defined'
  })
  .done(function(data){

  });
}
