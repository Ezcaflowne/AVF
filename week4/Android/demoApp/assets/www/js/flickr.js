$(function () {

    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
{
format: "json"
},
function(data) {
$.each(data.items, function(i,item){
$("<img/>").attr("src", item.media.m).appendTo("#flickrData");
if ( i > 10 ) return false;
});
});
});