$(() => {
    var photoBack = $(".photo.back")[0];
    var photoDecoration = $(".photo.decoration")[0];
    var f = function() {
        let pbLeft = window.innerWidth / 1437 * 730;
        let pdLeft = window.innerWidth / 1437 * 750;
        $(photoBack).css("left", pbLeft+"px");
        $(photoDecoration).css("left", pdLeft+"px");
        console.log(pbLeft);
        console.log(pdLeft);}
    $(window).on("resize", f);
    $(window).trigger("resize");
    }
);