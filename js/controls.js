$(document).ready(function(){
    var pressed = 0;

    $(document).keydown(function(e) {
      if(pressed != e.which){
        $('body').append(pressed);

        pressed = e.which;

        var x = parseInt($('#cam_x').text());
        var y = parseInt($('#cam_y').text());

        switch(e.which) {
            case 37:  // LEFT
                look(x + 10, y);
                break;
            case 39:  // RIGHT
                look(x - 10, y);
                break;
            case 38:  // UP
                look(x, y - 10);
                break;
            case 40:  // DOWN
                look(x, y + 10);
                break;
            case 87:  // W
                move('forwards');
                break;
            case 65:  // A
                move('left');
                break;
            case 83:  // S
                move('backwards');
                break;
            case 68:  // D
                move('right');
                break;
            case 82:  // R
                look(90, 90);
                break;
            default:
                console.log(e.which);
        }
      }
    });

    $(document).keyup(function(e) {
      if(e.which == 87 || e.which == 65 || e.which == 83 || e.which == 68){
        move('stopped');
      }
      pressed = 0;
    });

    $('body').on('mousedown', '#move-controls a', function(e){
      var direction = $(this).prop('id').split('-')[1];
      move(direction);
      e.preventDefault();
    });

    $('body').on('mouseup, mouseleave', '#move-controls a', function(e){
      move('stopped');
      e.preventDefault();
    });

    $('body').on('mousedown', '#look', function(evt){
      var clicked = document.getElementById('look').getBoundingClientRect();

      var x = (180 - ((evt.clientX - clicked.left)) / 2).toFixed(0);
      var y = ((evt.clientY - clicked.top) / 2).toFixed(0);

      look(x, y);

    });
});

function look(x, y){
  if(x > 180) x = 180;
  if(y > 180) y = 180;
  if(x < 0) x = 0;
  if(y < 0) y = 0;

  $.ajax({
    url: "actions/look.php",
    method: "POST",
    data: { x: x, y: y },
    dataType: 'text',
    mimeType: 'text/plain; charset=x-user-defined'
  })
  .done(function(data){
    $('#cam_x').text(x);
    $('#cam_y').text(y);

    var c_x = (180 - (x * 2)) + 180;
    var c_y = y * 2;

    $('#marker').stop().animate({'top':c_y+'px', 'left':c_x+'px'});
  });
}

function move(direction){
  $.ajax({
    url: "actions/move.php",
    method: "POST",
    data: { direction: direction },
    dataType: 'text',
    mimeType: 'text/plain; charset=x-user-defined'
  })
  .done(function( data ) {
    $('#move-controls a.btn-success').addClass('btn-info');
    $('#move-controls a.btn-success').removeClass('btn-success');

    $('#move-'+direction).removeClass('btn-info');
    $('#move-'+direction).addClass('btn-success');

    $('#move-status').html(direction);
  });
}
