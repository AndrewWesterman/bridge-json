var main = function() {
    "use strict";
    
    var username = "socalslacker";
    var url = "http://twitcher.steer.me/user/"+ username + "?key=9wfrwzhc";
    var $profilename = $("<p>").text("Avatar for "+username+":");
    var $avatar = $("<img>");
    $.getJSON(url, function (data) {
        $("main").append($profilename);
        $avatar.attr("src", data.profile_image_url_https);
        $("main").append($avatar);
    });
};

$(document).ready(main);