$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $(".the-two-menu-container").show();
        $(".left-menu").show()
        $(".right-menu").show()
        $(".left-menu").animate({ bottom: "0px", height: "100%" }, 1000);
        $(".right-menu").animate({ top: "0px", height: "100%" }, 1000);
        $(".top-nav").fadeIn(1000);
    });
    $(".close-image-container").click(function () {
        $(".left-menu").animate({ bottom: "-100vh", height: "0%" }, 1000, hideObj);
        $(".right-menu").animate({ top: "-100vh", height: "100%" }, 1000, hideObj);
        $(".top-nav").fadeOut(1000);
    });
    $(function () {
        $(".top-nav").hide();
        $(".the-two-menu-container").hide();
    });
    function hideObj() {
        $(".left-menu").hide()
        $(".right-menu").hide()
    }
})
