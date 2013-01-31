//Twitter API

// function twitterInfo(){
//     //console.log("It Works");
//     $.getJSON("http://search.twitter.com/search.json?q=diabetis&lang=en&rpp=10&include_entities=true&result_type=recent&callback=?",
//               function(tweets){
//               console.log(tweets);
//               for (i=0, j=tweets.results.length; i<j; i++){
//               $(".tweets")
// 	              .append("<li class='apiLink'>" + "<p>" + "<img src='" +
// 	                      tweets.results[i].profile_image_url +
// 	                      "'/><br/>" + "<h2>" + tweets.results[i].from_user + "</h2>" +
// 	                      tweets.results[i].created_at + "<br/>" + "<br/>" + tweets.results[i].text +
// 	                      "</p>" + "</li>");
// 	              }
              
//               }

// );}

    $(function () {
    $.getJSON("http://search.twitter.com/search.json?q=jeep&lang=en&rpp=10&include_entities=true&result_type=recent&callback=?",

      function(data) {
        console.log(data);
        alert(" Search for 'Tweets' Completed in " + data.completed_in + " Seconds");
        $("#data-msg").html("<span>Tweets</span> ");

        for (i=0, j=data.results.length; i < j; i++) {

            $("#data")
                .append("<li>" +
                "<p>" + "<img src= '" + data.results[i].profile_image_url +  "' /> " + data.results[i].from_user_name + " <br / ><span> " +
                 data.results[i].text +  " </span><br />   <em> " +  data.results[i].created_at + "</em> <h3> " +
          "</span></p > " +
          " </li>");
    }
  });
});