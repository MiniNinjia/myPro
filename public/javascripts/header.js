/**
 * Created by Administrator on 2017/8/28.
 */
$(function () {
    $('.index_user ul').html(_html);
    $('.index_main_menu li a').click(function () {
            $('.index_main_menu li a').parent().removeClass('active');
            $(this).parent().addClass('active');
        }
    );
    $('#index_search,#index_search_out').click(function () {
        $('#index_search').toggle(300);
        $('.index_main_menu').slideToggle(300);
        $('.index_search_box').slideToggle(300);
    });
    $('#index_dropdown').mouseenter(function () {
        $('#index_dropdown_menu').stop();
        $('#index_dropdown_menu').slideDown(100);
    });
    $('#index_dropdown').mouseleave(function () {
        $('#index_dropdown_menu').stop();
        $('#index_dropdown_menu').slideUp(100);
    })

});