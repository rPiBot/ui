$(document).ready(function(){
    $('body').on('mousedown', '#move-controls a', function(e){
      var direction = $(this).prop('id').split('-')[1];

      $.ajax({
        url: "actions/move.php",
        method: "POST",
        data: { direction: direction },
        dataType: 'html'
      })
      .done(function( data ) {
        console.log(data);
      });

      e.preventDefault();

    });

    $('body').on('mouseup, mouseleave', '#move-controls a', function(e){
      $.ajax({
        url: "actions/move.php",
        method: "POST",
        data: { direction: 'stop' },
        dataType: 'html'
      })
      .done(function( data ) {
        console.log(data);
      });

      e.preventDefault();

    });

    $('body').on('click', '#look-controls a', function(e){
      var axis = $(this).data('axis');
      var direction = $(this).data('direction');
      var type = 'step';

      $.ajax({
        url: "actions/look.php",
        method: "POST",
        data: { axis: axis, direction: direction, type: type },
        dataType: 'html'
      })
      .done(function( data ) {
        console.log(data);
      });

      e.preventDefault();

    });
});
