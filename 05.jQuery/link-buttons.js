/**
 * Created by 1234 on 30.6.2017 г..
 */
function attachEvents() {
    $('a.button').on('click',clicked);
    function clicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}