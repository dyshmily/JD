function my$ (id) {
  return document.getElementById(id);
};

var box = my$("md_carousel");//最外层div
var inner = my$("md_slider");//相框
var imgWidth = inner.offsetWidth;//图片宽度
var dvObj = my$("slider_lists"); //装着图片的容器
var spansObj = my$("slider_indicators").children; //小圆点

var sk_box = my$("sk_carousel"); //秒杀最外层div
var sk_inner = my$("sk_car_slider");
var sk_imgWidth = sk_inner.offsetWidth;
var sk_dvObj = my$("sk_slider");
var sk_spansObj = my$("sk_dir").children; //小圆点
var prev = my$("jd_prev"); //获取前进按钮
var next = my$("jd_next");
var pic = 0;
var sk_pic = 1;
for(var i = 0; i < spansObj.length; i++) {
  spansObj[i].setAttribute("index", i);   //循环的时候将索引值保存起来
  spansObj[i].onmouseover = function () {
    for(var j = 0; j < spansObj.length; j++){
      spansObj[j].removeAttribute("class");
    }
    this.className = "active";
    pic = this.getAttribute("index");
    animate(dvObj, -pic*imgWidth)
  };
};

for(var i = 0; i < sk_spansObj.length; i++) {
  // 定义一个全局变量，遍历小圆点，同时将小圆点的索引值保存到全局变量中，方便后续使用。为小圆点注册鼠标移入事件，鼠标移入的同时遍历每一个圆点，将每一个圆点的样式都清除。之后再为当前移入的目标加上激活样式，获得当前的索引值，调用动画函数，使图片变化到小圆点代表的那张图片上
  sk_spansObj[i].setAttribute("sk_index", i);   //循环的时候将索引值保存起来
  sk_spansObj[i].onmouseover = function () {
    for(var j = 0; j < sk_spansObj.length; j++){
      sk_spansObj[j].removeAttribute("class");
    }
    this.className = "sk_active";
    sk_pic = this.getAttribute("sk_index");
    animate(sk_dvObj, -sk_pic*sk_imgWidth);
  };
};
// 为了实现无缝连接克隆第一个图片节点追加到容器尾部
dvObj.appendChild(dvObj.children[0].cloneNode(true));
sk_dvObj.appendChild(sk_dvObj.children[0].cloneNode(true));
next.onclick = clickHandle;
function clickHandle () {
  // 定义一个点击事件clickHandle，判断自定义的全局变量索引，如果等于所有图片的个数减一（因为前面克隆了一个节点，所以要减一）就将全局变量赋值为一，同时将图片容器的left赋值为0px，是图片从第一张重新开始。如果不等，则全局变量自加调用动画函数。并且判断如果全局变量等于所有图片的个数减一将最后一个圆点点的样式去掉，且将第一个原点的样式加上（因为这一瞬间，用户认为看见的是第一张，其实是我们克隆的那一张）否则的话遍历所有圆点去掉样式，同时将当前圆点的样式加上。调用定时器，让其在一段时间后自动轮播(setInterval(clickHandle, 1500))
  if (pic == dvObj.children.length-1) { //dvObj.children.length-1
    pic = 0;
    dvObj.style.left = 0 + "px";
  }
  pic++;
  animate(dvObj, -pic*imgWidth);
  // 如果pic==7，此时显示第八张（内容是第一张图），第一个小圆点变色
  if (pic == dvObj.children.length-1) { //dvObj.children.length-1
    // 第七个圆点颜色去掉
    spansObj[spansObj.length-1].className = "";
    // 第一个圆点颜色加上
    spansObj[0].className = "active";
  }else {
    // 去掉所有圆点颜色
    for(var i = 0; i < spansObj.length; i++) {
      spansObj[i].removeAttribute("class");
    }
    spansObj[pic].className = "active";
  }
};
function sk_clickHandle () {
 if (sk_pic == 2) {  
    sk_pic = 0;
    sk_dvObj.style.left = 0 + "px";
  }
  animate(sk_dvObj, -sk_pic*sk_imgWidth);
  // 如果pic==2，此时显示第3张（内容是第一张图），第一个小圆点变色
  if (sk_pic == 2) { 
    // 第2个圆点颜色去掉
    sk_spansObj[sk_spansObj.length-1].className = ""; 
    // 第一个圆点颜色加上
    sk_spansObj[0].className = "sk_active";
  }else {
    // 去掉所有圆点颜色
    for(var i = 0; i < sk_spansObj.length; i++) { 
      sk_spansObj[i].removeAttribute("class");
    }
    sk_spansObj[sk_pic].className = "sk_active";
    sk_pic++;
  } 
}
prev.onclick = function () {
  if (pic == 0) {
    pic = spansObj.length;
    dvObj.style.left = -pic*imgWidth + "px";
  }
  pic--;
  animate(dvObj, -pic*imgWidth);
  // 设置圆点颜色
  for(var i = 0; i < spansObj.length; i++) {
    spansObj[i].removeAttribute("class");
  }
  spansObj[pic].className = "active";
}
var timer = setInterval(clickHandle, 1500);
var sk_timer = setInterval(sk_clickHandle, 1500);
// 鼠标进入事件
box.onmouseover = function() {
  clearInterval(timer);
}
box.onmouseout = function() {
  timer = setInterval(clickHandle, 1500);
}
sk_box.onmouseover = function() {
  clearInterval(sk_timer);
}
sk_box.onmouseout = function() {
  sk_timer = setInterval(sk_clickHandle, 1500);
}
function animate(element, target) {
  clearInterval(element.timeId);
  element.timeId = setInterval(function() {
    element.style.left = target + "px";
  }, 50);
}