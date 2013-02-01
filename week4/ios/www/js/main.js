//
//	Willson Ayotte
//	Full Sail University
//	Advanced Visual Frameworks
//	Week 1 Project 1

$(document).ready(function()
{
	//HOME PAGE
	$('#home').live('pageshow', function()
	{console.log("Home Page Loaded");});

	//ADD FOOTER
	$('#header').empty();
	$(function()
	{$('#header').append('<center><h1>AVF Launch Page</h1></center>');});
	console.log("Header Is Loaded");

	//ADD FOOTER
	$('#footer').empty();
	$(function()
	{$('#footer').append('<small>Willson Ayotte - Full Sail University - AVF - 1301</small>');});
	console.log("Footer Is Loaded");

});

//Twitter API

function twitterInfo(){
    //console.log("It Works");
    $.getJSON("http://search.twitter.com/search.json?q=diabetis&lang=en&rpp=10&include_entities=true&result_type=recent&callback=?",
              function(tweets){
              console.log(tweets);
              for (i=0, j=tweets.results.length; i<j; i++){
              $(".tweets")
	              .append("<li class='apiLink'>" + "<p>" + "<img src='" +
	                      tweets.results[i].profile_image_url +
	                      "'/><br/>" + "<h2>" + tweets.results[i].from_user + "</h2>" +
	                      tweets.results[i].created_at + "<br/>" + "<br/>" + tweets.results[i].text +
	                      "</p>" + "</li>");
	              }
              
              }

);}


/////ACClEROMETER


function getCurrentAcceleration() {
    navigator.accelerometer.getCurrentAcceleration(onAccelerationSuccess, onError);
    console.log('getCurrentAcceleration');
}

// Success: Get snapshot of  current acceleration
function onAccelerationSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + ', Acceleration Y: ' + acceleration.y + ', Acceleration Z: ' + acceleration.z);
    console.log('Success. Get Snapshot of Current Acceleration');
}

// Error: Fail to get acceleration
function onError() {
    alert("onError");
    console.log('Failed to get Acceleration');
}

//START
var x = 0,
  y = 0,
  vx = 0,
  vy = 0,
  ax = 0,
  ay = 0;
var sphere = document.getElementById("sphere");
if (window.DeviceMotionEvent !== undefined) {
  window.ondevicemotion = function (e) {
    ax = event.accelerationIncludingGravity.x * 5;
    ay = event.accelerationIncludingGravity.y * 5;
    document.getElementById("accelerationX").innerHTML = e.accelerationIncludingGravity.x;
    document.getElementById("accelerationY").innerHTML = e.accelerationIncludingGravity.y;
    document.getElementById("accelerationZ").innerHTML = e.accelerationIncludingGravity.z;
    if (e.rotationRate) {
      document.getElementById("rotationAlpha").innerHTML = e.rotationRate.alpha;
      document.getElementById("rotationBeta").innerHTML = e.rotationRate.beta;
      document.getElementById("rotationGamma").innerHTML = e.rotationRate.gamma;
    }
  }

setInterval(function () {
  var landscapeOrientation=window.innerWidth/window.innerHeight>1;
  if (landscapeOrientation) {
  vx = vx + ay;
  vy = vy + ax;
    } else {
      vy = vy - ay;
      vx = vx + ax;
      }
  vx = vx * 0.98;
  vy = vy * 0.98;
  y = parseInt(y + vy / 50);
  x = parseInt(x + vx / 50);
  boundingBoxCheck();
  sphere.style.top = y + "px";
  sphere.style.left = x + "px";
  }, 25);
}

function boundingBoxCheck() {
if (x < 0) {
    x = 0;
    vx =- vx;
  }
    if (y < 0) {
      y = 0;
      vy =- vy;
    }
      if (x > document.documentElement.clientWidth - 20) {
        x = document.documentElement.clientWidth - 20;
        vx =- vx;
      }
        if (y > document.documentElement.clientHeight - 20) {
          y = document.documentElement.clientHeight - 20;
          vy =- vy;
        }
}
////// END ACClEROMETER