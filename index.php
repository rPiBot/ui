<!DOCTYPE>
<html>
  <head>
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/controls.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
  </head>

  <body>
    <div class="container-fluid">
      <div id="main" class="row">
        <div id="move-controls" class="col-md-3 text-center full-height">
          <h2>Move</h2>
          <a id="move-forwards" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-arrow-up"></span>&#8203;</a>
          <br/>
          <div class="btn-group">
            <a id="move-left" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-arrow-left"></span>&#8203;</a>
            <a id="move-stopped" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-stop"></span>&#8203;</a>
            <a id="move-right" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-arrow-right"></span>&#8203;</a>
          </div>
          <br/>
          <a id="move-backwards" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-arrow-down"></span>&#8203;</a>
          <br/>
          <br/>
          <div id="move-status" class="text-left well text-uppercase">
            STOPPED
          </div>
        </div>
        <div class="col-md-6 full-height">
          <div id="main-image"><img src="http://192.168.1.206/xCam/cam_pic_new.php"></div>
        </div>
        <div id="look-controls" class="col-md-3 text-center full-height">
          <h2>Look</h2>
          <a id="look-up" class="btn btn-info btn-lg" data-axis="y" data-direction="negative"><span class="glyphicon glyphicon-arrow-up"></span>&#8203;</a>
          <br/>
          <div class="btn-group">
            <a id="look-left" class="btn btn-info btn-lg" data-axis="x" data-direction="positive"><span class="glyphicon glyphicon-arrow-left"></span>&#8203;</a>
            <a id="look-reset" class="btn btn-default btn-lg" data-direction="reset"><span class="glyphicon glyphicon-screenshot"></span>&#8203;</a>
            <a id="look-right" class="btn btn-info btn-lg" data-axis="x" data-direction="negative"><span class="glyphicon glyphicon-arrow-right"></span>&#8203;</a>
          </div>
          <br/>
          <a id="look-down" class="btn btn-info btn-lg" data-axis="y" data-direction="positive"><span class="glyphicon glyphicon-arrow-down"></span>&#8203;</a>
          <br/>
          <br/>
          <div id="move-status" class="text-left well text-uppercase">
            <div class="row">
              <div class="col-md-6">X: <span id="cam_x">90</span></div>
              <div class="col-md-6 text-right">Y: <span id="cam_y">90</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
