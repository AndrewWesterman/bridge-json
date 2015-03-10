var main = function() {
    "use strict";
        
    $(".submit").on("click", function() {
        var username,
            url, 
            $profilename,
            $avatar;
        console.log("Button clicked!");
        if($(".username").val() !== ""){
            username = $(".username").val();
        }
        url = "http://twitcher.steer.me/user/"+ username + "?key=9wfrwzhc";
        $profilename = $("<p>").text("Avatar for @"+username+":");
        $avatar = $("<img>");
        $.getJSON(url, function (data) {
            $avatar.attr("src", data.profile_image_url_https);
            $("main").prepend($avatar);
            $("main").prepend($profilename);            
        });
    });    
};

$(document).ready(main);