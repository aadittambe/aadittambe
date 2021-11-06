$(".icon-twitter").on("click", function () {

  var tweet = "xxx"; //Tweet text
  var url = "xxx"; //Interactive URL

  var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
  window.open(twitter_url, 'mywin', 'left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

});


$(".icon-facebook").on("click", function () {

  var picture = "xxx"; //Picture URL
  var title = "xxx"; //Post title
  var description = "xxx"; //Post description
  var url = "http://www.umd.edu"; //Interactive URL

  var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
  window.open(facebook_url, 'mywin', 'left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

});


let count1 = 0
$("#ans1a").one('click', function () {
  if (count1 == 0) {
    $("#ans1a").css("background-color", "#990000");
    $("#ans1a").css("color", "#e9e8ea");
    $("#resp1a").slideToggle(200).show();
    $("#explaination1").slideToggle(500).show();
  }
  count1 = count1 + 1
});
$("#ans1b").one('click', function () {
  if (count1 == 0) {
    $("#ans1b").css("background-color", "#990000");
    $("#ans1b").css("color", "#e9e8ea");
    $("#resp1b").slideToggle(200).show();
    $("#explaination1").slideToggle(500).show();
  }
  count1 = count1 + 1
});
$("#ans1c").one('click', function () {
  if (count1 == 0) {
    $("#ans1c").css("background-color", "#990000");
    $("#ans1c").css("color", "#e9e8ea");
    $("#resp1c").slideToggle(200).show();
    $("#explaination1").slideToggle(500).show();
  }
  count1 = count1 + 1
});
$("#ans1d").one('click', function () {
  if (count1 == 0) {
    $("#ans1d").css("background-color", "#990000");
    $("#ans1d").css("color", "#e9e8ea");
    $("#resp1d").slideToggle(200).show();
    $("#explaination1").slideToggle(500).show();
  }
  count1 = count1 + 1
});
$("#ans1e").one('click', function () {
  if (count1 == 0) {
    $("#ans1e").css("background-color", "#990000");
    $("#ans1e").css("color", "#e9e8ea");
    $("#resp1e").slideToggle(200).show();
    $("#explaination1").slideToggle(500).show();
  }
  count1 = count1 + 1
});
$("#ans1f").one('click', function () {
  if (count1 == 0) {
    $("#ans1f").css("background-color", "#990000");
    $("#ans1f").css("color", "#e9e8ea");
    $("#resp1f").slideToggle(200).show();
    $("#explaination1").slideToggle(500).show();
  }
  count1 = count1 + 1
});

let count2 = 0
$("#ans2a").one('click', function () {
  if (count2 == 0) {
    $("#ans2a").css("background-color", "#990000");
    $("#ans2a").css("color", "#e9e8ea");
    $("#resp2a").slideToggle(200).show();
    $("#explaination2").slideToggle(500).show();
  }
  count2 = count2 + 1
});
$("#ans2b").one('click', function () {
  if (count2 == 0) {
    $("#ans2b").css("background-color", "#990000");
    $("#ans2b").css("color", "#e9e8ea");
    $("#resp2b").slideToggle(200).show();
    $("#explaination2").slideToggle(500).show();
  }
  count2 = count2 + 1
});

let count3 = 0
$("#ans3a").one('click', function () {
  if (count3 == 0) {
    $("#ans3a").css("background-color", "#990000");
    $("#ans3a").css("color", "#e9e8ea");
    $("#resp3a").slideToggle(200).show();
    $("#explaination3").slideToggle(500).show();
  }
  count3 = count3 + 1
});
$("#ans3b").one('click', function () {
  if (count3 == 0) {
    $("#ans3b").css("background-color", "#990000");
    $("#ans3b").css("color", "#e9e8ea");
    $("#resp3b").slideToggle(200).show();
    $("#explaination3").slideToggle(500).show();
  }
  count3 = count3 + 1
});
$("#ans3c").one('click', function () {
  if (count3 == 0) {
    console.log('yay')
    $("#ans3c").css("background-color", "#990000");
    $("#ans3c").css("color", "#e9e8ea");
    $("#resp3c").slideToggle(200).show();
    $("#explaination3").slideToggle(500).show();
  }
  count3 = count3 + 1
});

let count4 = 0
$("#ans4a").one('click', function () {
  if (count4 == 0) {
    $("#ans4a").css("background-color", "#990000");
    $("#ans4a").css("color", "#e9e8ea");
    $("#resp4a").slideToggle(200).show();
    $("#explaination4").slideToggle(500).show();
  }
  count4 = count4 + 1
});
$("#ans4b").one('click', function () {
  if (count4 == 0) {
    $("#ans4b").css("background-color", "#990000");
    $("#ans4b").css("color", "#e9e8ea");
    $("#resp4b").slideToggle(200).show();
    $("#explaination4").slideToggle(500).show();
  }
  count4 = count4 + 1
});


let count5 = 0
$("#ans5a").one('click', function () {
  if (count5 == 0) {
    $("#ans5a").css("background-color", "#990000");
    $("#ans5a").css("color", "#e9e8ea");
    $("#resp5a").slideToggle(200).show();
    $("#explaination5").slideToggle(500).show();
  }
  count5 = count5 + 1
});
$("#ans5b").one('click', function () {
  if (count5 == 0) {
    $("#ans5b").css("background-color", "#990000");
    $("#ans5b").css("color", "#e9e8ea");
    $("#resp5b").slideToggle(200).show();
    $("#explaination5").slideToggle(500).show();
  }
  count5 = count5 + 1
});
$("#ans5c").one('click', function () {
  if (count5 == 0) {
    $("#ans5c").css("background-color", "#990000");
    $("#ans5c").css("color", "#e9e8ea");
    $("#resp5c").slideToggle(200).show();
    $("#explaination5").slideToggle(500).show();
  }
  count5 = count5 + 1
});


//  $("#nation-button").click(function(){
//   $("#nation-container").show();
//   $("#maryland-container").hide();
//  });
