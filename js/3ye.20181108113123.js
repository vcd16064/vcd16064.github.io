(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-155').attr('src', (dpi>1) ? 'images/fanhui-124.png' : 'images/fanhui-62.png');
$('.js-156').attr('src', 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-588.jpg');
$('.js-157').attr('src', 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-02-587.jpg');
$('.js-158').attr('src', 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-03-588.jpg');
$('.js-159').attr('src', 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-04-587.jpg');}else if($(window).width()>=480){$('.js-155').attr('src', (dpi>1) ? 'images/fanhui-50.png' : 'images/fanhui-25.png');
$('.js-156').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-470.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-235.jpg');
$('.js-157').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-02-470.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-02-235.jpg');
$('.js-158').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-03-470.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-03-235.jpg');
$('.js-159').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-04-470.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-04-235.jpg');}else{$('.js-155').attr('src', (dpi>1) ? 'images/fanhui-34.png' : 'images/fanhui-17.png');
$('.js-156').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-314.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-157.jpg');
$('.js-157').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-02-314.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-02-157.jpg');
$('.js-158').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-03-314.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-03-157.jpg');
$('.js-159').attr('src', (dpi>1) ? 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-04-314.jpg' : 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-04-157.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-170').mouseenter(function() { $.loadImages('images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-596.jpg', function() { }) });
$('.js-170').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-170-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-01-596.jpg'; } } });
$('.js-171').mouseenter(function() { $.loadImages('images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-02-596.jpg', function() { }) });
$('.js-171').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-171-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-02-596.jpg'; } } });
$('.js-172').mouseenter(function() { $.loadImages('images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-03-596.jpg', function() { }) });
$('.js-172').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-172-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-03-596.jpg'; } } });
$('.js-173').mouseenter(function() { $.loadImages('images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-04-596.jpg', function() { }) });
$('.js-173').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-173-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/can-sai-mo-ban-zhong-wen-xue-sheng-zu-cs4-04-596.jpg'; } } });

});