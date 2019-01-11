// ====================================================
// ===================== SERVICES =====================
// ====================================================
$(function() {
    //animate on scroll
    new WOW().init();
});

// ====================================================
// ======================= Work =======================
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