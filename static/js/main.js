// ====================================================
// ===================== SERVICES =====================
// ====================================================
$(function() {
    //animate on scroll
    new WOW().init();
});

// ====================================================
// ======================= WORK =======================
// ====================================================

$(function() {
    //popup on click
    $('#work .img-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
    });
});

// ====================================================
// ======================= TEAM =======================
// ====================================================
$(function() {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});