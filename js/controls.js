$(document).ready(function(){
   var look_interval;

    $('body').on('mousedown', '#move-controls a', function(e){
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
      var object = $(this);
      clearInterval(look_interval);
      look_interval = setInterval(function() { look(object) },200);
      e.preventDefault();
    });

    $('body').on('mouseup, mouseleave', '#look-controls a', function(e){
      clearInterval(look_interval);
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
    console.log('looked');
  });
}
