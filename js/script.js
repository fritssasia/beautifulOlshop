// Navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("navbar-active");
    } else {
        $(".navbar").removeClass("navbar-active");
    }
});