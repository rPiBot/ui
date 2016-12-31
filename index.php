<?php exec('python /home/pi/v1/camera.pan_tilt.py 90 90') ?>

<!DOCTYPE>
<html>
  <head>
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/controls.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <title>rPiBot</title>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
  </head>

  <body>
    <div class="container-fluid">
      <h1>r<strong>Pi</strong>Bot <small></small></h1>
      <div id="main" class="row">
        <div id="move-controls" class="col-md-3 text-center full-height">
          <h2>Move</h2>
          <a id="move-forwards" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-arrow-up"></span>&#8203;</a>
          <br/>
          <div class="btn-group">
            <a id="move-left" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-arrow-left"></span>&#8203;</a>
            <a class="spacer btn disabled"></a>
            <a id="move-right" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-arrow-right"></span>&#8203;</a>
          </div>
          <br/>
          <a id="move-backwards" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-arrow-down"></span>&#8203;</a>
          <br/>
          <br/>
          <div id="move-status" class="text-uppercase">
            STOPPED
          </div>
        </div>
        <div class="col-md-6 full-height">
          <div id="main-image"><img src="http://192.168.1.206/xCam/cam_pic_new.php"></div>
        </div>
        <div id="look-controls" class="col-md-3 text-center full-height">
          <h2>Look</h2>

          <div id="look-container">
            <div id="marker"></div>
            <canvas id="look" width="360" height="360"></canvas>

            <div id="analog-look-status" class="text-uppercase">
                X: <span id="cam_x">90</span>
              | Y: <span id="cam_y">90</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
