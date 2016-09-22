//JavaScript Document
$(document).ready(function () {
	// 1.顶部banner主要js效果区
	// 送货区域选择特效
	$(".banner_middle").find("div:first").hover(function () {
		// 第一个div鼠标移入事件
		$(this).removeClass("left_show");
		$(this).addClass("left_hidden")
	},function(){
		// 第一个div鼠标移出事件
		$(this).removeClass("left_hidden");
		$(this).addClass("left_show");
	});

	//品牌团购的导航区的左侧显示、隐藏部分;
	function change1(){
		$("#meinu_nav .mid_content div.left_fenlei").hover(function(){//鼠标移入事件;
			$(this).children("ul").first().removeClass("hid");//删除一个类名;
		},function(){//鼠标移出事件;
			$(this).children("ul").first().addClass("hid");//删除一个类名;
		});
	};
	change1();//调取相关函数;

	//2.大图片轮播区
	function lunbo_nu1(){
		//变量声明及对象定义
		var j=1;
		var n=1;
		var obj_ul=$("#lunbo_box").children(".lubo_tu");
		var obj_li_img=obj_ul.children("li");
		var obj_li_dian=$("#lunbo_box").children("ul.yuandian").children("li");
		var obj_span=obj_ul.children("span");
		//设置计时器
		var timer=window.setInterval(function(){
			for (var i = 0; i < obj_li_img.length; i++) {//循环遍历整个li元素集合
				obj_li_img.eq(i).hide();//先隐藏所有i;
				obj_li_dian.eq(i).removeClass("cur");
				//所有圆点去除class属性;
			};
			//判断条件;
			if (j>=obj_li_img.length-1||j<0) {
				n=-n;
			};
			obj_li_dian.eq(j).addClass("cur");//给指定的原点设置属性;
			obj_li_img.eq(j).fadeIn(2000);//让指定的li显示;
			j+=n;
		},4000);
		//鼠标移入移出事件;
		obj_ul.hover(function(){
			clearInterval(timer);//清除计时;
			obj_span.show();//让指定span显示;

		},function(){
			obj_span.hide();//让指定span隐藏;
			//计时器timer恢复;
			timer=window.setInterval(function(){
				for (var i = 0; i < obj_li_img.length; i++) {
					obj_li_img.eq(i).hide();
					obj_li_dian.eq(i).removeClass("cur");
				};
				if (j>=obj_li_img.length-1||j<=0) {
					n=-n;
				};
				obj_li_dian.eq(j).addClass("cur");
				obj_li_img.eq(j).fadeIn(2000);
				j+=n;
			},4000);
		});
		//右侧箭头绑定点击事件;
		obj_span.eq(1).click(function(){
			$("obj_li_mg").stop();
			$("obj_li_dian").stop();
			for (var i = 0; i < obj_li_img.length; i++) {
				obj_li_img.eq(i).hide();
				obj_li_dian.eq(i).removeClass("cur");
			};
			if (j>=obj_li_img.length) {
				j=0;
			};
			obj_li_dian.eq(j).addClass("cur");
			obj_li_img.eq(j).fadeIn(1000);
			j++;
		});//绑定单击事件;
		//左侧箭头绑定点击事件;
		obj_span.eq(0).click(function(){
			$("obj_li_mg").stop();
			$("obj_li_dian").stop();
			for (var i = 0; i < obj_li_img.length; i++) {
				obj_li_img.eq(i).hide();
				obj_li_dian.eq(i).removeClass("cur");
			};
			if (j<0) {
				j=5;
			};
			obj_li_dian.eq(j).addClass("cur");
			obj_li_img.eq(j).fadeIn(1000);
			j--;
		});//绑定单击事件;
		//给小圆点绑定移入事件;
		obj_li_dian.mouseover(function(){
			clearInterval(timer);//清除计时器;
			//结束未完成的动作;
			$("obj_li_img").stop();
			$("obj_li_dian").stop();
			for(var i = 0;i<obj_li_img.length;i++){//设置循环，遍历整个li集合
			obj_li_img.eq(i).hide();//让所有li先隐藏;
			obj_li_dian.eq(i).removeClass("cur");//让所有圆点去除class属性;
			};
			$(this).addClass("cur");
			for(var i = 0;i<obj_li_img.length;i++){//设置循环，遍历整个li集合
				if(obj_li_dian.eq(i).attr("class") == "cur"){
					obj_li_img.eq(i).fadeIn(1000);//让指定的li显示;
					j = i;
					return false;
				};	
			};
		});//给小圆点绑定移入事件;
	}
	lunbo_nu1();

	//3.页面中1F及以下的所有小轮播效果。
	function lunbo_nu2(obj){//页面中的小轮播函数;
		//获取相关对象；
		var ojb_show = $(obj);//获取轮播(显示区处对象);
		var obj_kuang = $(ojb_show).find("ul.kuang");//获取存放轮播图片的整个框架;
		var obj_yd = $(ojb_show).find("ul.yuandian");//获取存放轮播换圆点的整个框架;
		var obj_jt = $(ojb_show).find("span");//获取存放轮播换两侧箭头的集合;
		var w = $(obj_kuang).children("li").first().width();//获取每次移动的left值;

		//设置计时器;
		var len = $(obj_kuang).children("li").length;//获取多少个li img图片个数减一;
		//alert(len);
		var index = 0;//显示元素的序号;
		var j = -1;

		//创建变化函数;
		function change(){
			if (index>=len-1||index<=0){
				j=-j;

			};
			index+=j;
			$(obj_kuang).animate({
				left:-index*w+'px',
			},1000);//改变lefts的值；

			//设置显示相应的小圆点:
			$(obj_yd).children("li").each(function(i){
				$(obj_yd).children("li").eq(i).removeClass("cur");//去除相应的Class类名;
			});//遍历整个对象集合;
			$(obj_yd).children("li").eq(index).addClass("cur");//添加相应的Class类名;
		};//创建变化函数;

		var timer = window.setInterval(change,3000);//设置计时器;
		//鼠标移入、移出显示框时的状态:
		$(ojb_show).hover(function(){//移入事件函数;
			$(obj_jt).show();//隐藏的箭头显示;
			window.clearInterval(timer);//清除计时器;
		},function(){//移出事件函数;
			$(obj_jt).hide();//隐藏的箭头显示;
			timer = window.setInterval(change,3000);//恢复计时器;
		});

		//设置鼠标移入圆点时的效果;
		$(obj_yd).children("li").mouseover(function(){//设置鼠标移入事件;
			//鼠标移入后立即结束以前未完成的动画;
			$(obj_kuang).stop();
			$(obj_yd).children("li").stop();

			//遍历整个对象集合去除class的"cur"名;
			$(obj_yd).children("li").each(function(i){
				$(obj_yd).children("li").eq(i).removeClass("cur");//去除相应的Class类名;
			});//遍历整个对象集合去除class的"cur"名;
			$(this).addClass("cur");//设置相应的Class类名;

			//通过遍历整个对象集合找出移入的圆点序号;
			$(obj_yd).children("li").each(function(i){
				if($(obj_yd).children("li").eq(i).attr("class")=="cur"){
					index = i;
					return false;
				};
			});//遍历整个对象集合去除class的"cur"名;

			//让指定的图片显示;
			$(obj_kuang).animate({
				left:-index*w + "px",
			},1000);//改变left值;
		});//设置鼠标移入事件;

		//设置鼠标移入两侧箭头的效果;
		//左箭头效果;
		$(obj_jt).eq(0).click(function(){
			//鼠标移入后立即结束以前未完成的动画;
			$(obj_kuang).stop();
			$(obj_yd).children("li").stop();

			//设置变化代码;
			if(index>=len-1){
				index = -1
			};
			index++;
			$(obj_kuang).animate({
				left:-index*w + "px",
			},1000);//改变left值;

			//设置显示相应的小圆点:
			$(obj_yd).children("li").each(function(i){
				$(obj_yd).children("li").eq(i).removeClass("cur");//去除相应的Class类名;
			});//遍历整个对象集合;
			$(obj_yd).children("li").eq(index).addClass("cur");//添加相应的Class类名;
		});//设置单事件;

		//右箭头效果;
		$(obj_jt).eq(1).click(function(){
			//鼠标移入后立即结束以前未完成的动画;
			$(obj_kuang).stop();
			$(obj_yd).children("li").stop();

			//设置变化代码;
			if(index<=0){
				index = len;
			};
			index--;
			$(obj_kuang).animate({
				left:-index*w + "px",
			},1000);//改变left值;

			//设置显示相应的小圆点:
			$(obj_yd).children("li").each(function(i){
				$(obj_yd).children("li").eq(i).removeClass("cur");//去除相应的Class类名;
			});//遍历整个对象集合;
			$(obj_yd).children("li").eq(index).addClass("cur");//添加相应的Class类名;
		});//设置单事件;
	};

	//对小轮播函数的各自调用;
	//1F小轮播调用函数;
	lunbo_nu2("#fuzhuang_xiebao .fz_title ul.fenlie_right_meinu li div.hid div.hid_midd .lunbo");
	//2F小轮播调用函数;
	lunbo_nu2("#personal_hufu .per_hf_title ul.per_right_meinu li div.hid .hid_midd");
	//6F小轮播调用函数;
	lunbo_nu2("#sport_jianshen .sport_title ul.sport_right_meinu li div.hid .num3");
	//7F小轮播调用函数;
	lunbo_nu2("#home_life .home_title ul.home_right_meinu li div.hid .num3");
})//实现先加载html后加载js代码作用;

