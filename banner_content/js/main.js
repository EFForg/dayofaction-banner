$(document).ready( function () {
    $('#action_not_us').on('click', function(ev) {
        window.open('./petition.html', "_blank", "width=500,height=650,scrollbars=no");
        return false;
    });
    $('#action_us').on('click', function(ev) {
        window.open('./email.html', "_blank", "width=500,height=625,scrollbars=no");
        return false;
    });
});
