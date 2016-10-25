$(document).ready(function() {

    var menu1 = $(".menu1");
    var list = $(".menu");

    menu1.on("click", function() {
        list.slideToggle(500, function() {
            $(this).attr('style', "").toggleClass("show");
        });
    });
});
