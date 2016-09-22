;(function($){
	$.fn.extend({
		lunbo_1:function(options){
			var images=['14.jpg','15.jpg','16.jpg','17.jpg','18.jpg'];
			var i=0;	
			var def={
				imgarr:images,
				fadeTime:800,
				timeOut:2000
			}
			var opt=$.extend(def, options);
			function change(n){
				//得到图片更改路径
				$('.lunbo #img').fadeOut(0).attr('src','images/fz_xb/'+opt.imgarr[n]).fadeIn(opt.fadeTime);
				$('.lunbo .yuandian .cur').removeClass('cur');
				$('.lunbo .yuandian li').eq(n).addClass('cur');
			}
			function autoChange(){
				//自增
				i++;
				
				if(i>=opt.imgarr.length){
					i=0;
				}
				//更换图片，动画，li的样式
				change(i);	
				
			}
			t=setInterval(function(){
				autoChange()
			},opt.timeOut);			
			//span悬浮事件
			$('.lunbo').hover(function(){
				clearInterval(t)
				$(this).children('span').css('opacity',0.6);
			},function(){
				$(this).children('span').css('opacity',0.2);
				t=setInterval(function(){
					autoChange()
				},opt.timeOut);
			})			
			//span点击事件
			$('.lunbo span').click(function(){
				if($(this).hasClass('left')){
					i--;					
					//判断
					if(i<0){
						i=opt.imgarr.length-1;
					}
					//上一张
					change(i);
				}else{
					//下一张
					i++;					
					//判断
					if(i>=opt.imgarr.length){
						i=0;
					}
					//上一张
					change(i);					
				}
			})		
			//li的悬浮事件
			$('.lunbo .yuandian li').mouseover(function(){
				//当前li
				var index=$(this).index();
				//将全局i换成index
				i=index;
				$('.lunbo #img').stop();
				//更改样式
				change(i);
			})
		}
	})
})(jQuery);
$('.lunbo').lunbo_1();