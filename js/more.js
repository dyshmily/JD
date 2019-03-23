function showFind (cid){
	$(".more_find[cid=" + cid + "]").css("opacity", 1);
}
function hideFind (cid){
	$(".more_find[cid = "+cid+"]").css("opacity", 0);
}
$(function () {
	$(".more_item").mouseenter(function () {
		var cid = $(this).attr("cid");
		showFind(cid);
	});
	$(".more_item").mouseleave(function () {
		var cid = $(this).attr("cid");
		hideFind(cid);
	});
	$(".more_find_btn").mouseenter(function () {
		$('.more_find_btn').css("background", "black")
	});
	$(".more_find_btn").mouseleave(function () {
		$('.more_find_btn').css("background", "#222")
	});
});

function show_nav (nav_id){
	$(".hide_nav[nav_id=" + nav_id + "]").css("display", "block");
	$(".hide_lt_menu_li[nav_id = "+nav_id+"]").css("display", "block");
}
function hide_nav (nav_id){
	$(".hide_nav[nav_id = "+nav_id+"]").css("display", "none");
	$(".hide_lt_menu_li[nav_id = "+nav_id+"]").css("display", "none");
}
$(function () {
	$(".li_btn").mouseenter(function () {
		var nav_id = $(this).attr("nav_id");
		$(".li_btn[nav_id=" + nav_id + "]").css("background", "#fff")
		$(".lt_menu_li[nav_id=" + nav_id + "]").css("background", "#e3e4e5")
		show_nav(nav_id);
	});
	$(".li_btn").mouseleave(function () {
		var nav_id = $(this).attr("nav_id");
		$(".li_btn[nav_id=" + nav_id + "]").css("background", "#e3e4e5")
		$(".lt_menu_li[nav_id=" + nav_id + "]").css("background", "#fff")
		hide_nav(nav_id);
	});
	$(".hide_nav").mouseenter(function () {
		var nav_id = $(this).attr("nav_id");
		$(".li_btn[nav_id=" + nav_id + "]").css("background", "#fff")
		$(".lt_menu_li[nav_id=" + nav_id + "]").css("background", "#e3e4e5")
		show_nav(nav_id);
	});
	$(".hide_nav").mouseleave(function () {
		var nav_id = $(this).attr("nav_id");
		$(".li_btn[nav_id=" + nav_id + "]").css("background", "#e3e4e5")
		$(".lt_menu_li[nav_id=" + nav_id + "]").css("background", "#fff")
		hide_nav(nav_id);
	});
});