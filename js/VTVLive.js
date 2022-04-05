$(document).ready(function () {

    $nav = $('.nav-main');
    $toggleCollapse = $('.toggle-collapse-nav');

    /** click envent **/

    $toggleCollapse.click(function () {
        $nav.toggleClass("collapse");
    })

});