$(function () {
	$('#menu li').click(function () {
        $('#menu li').removeClass('active').eq($(this).index()).addClass('active');
        var tips = ['搜店','地址','全文','优惠券','视频'];

    });
});