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
