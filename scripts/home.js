$(function(){
    // 所有.poptip提示
    $('.poptip').popup({inline: true, hoverable: true, position : 'top left'});

    // sidebar
    $('#sidebar-toggler').on("click", function(){
        $('.sidebar').sidebar({
            overlay: false
        }).sidebar("toggle");
    });

});