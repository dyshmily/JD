var del_ban = document.getElementById("del_banner");
del_ban.onclick = function () {
	var imgObj = document.getElementById("del_img");
	imgObj.style.display = "none";
}

var search = document.getElementById("jd_serch_text");
search.onfocus = function() {
	if (this.value == "2019夏季爆款") {
		this.value = " ";
		this.style.color = "black"
	}
};

search.onblur = function() {
	if (this.value == " ") {
		this.value = "2019夏季爆款";
		this.style.color = "#999";
	}
};

