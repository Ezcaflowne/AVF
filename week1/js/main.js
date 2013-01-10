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
	{$('#footer').append('<small>Willson Ayotte - Full Sail University - AVF - 0113</small>');});
	console.log("Footer Is Loaded");


});
