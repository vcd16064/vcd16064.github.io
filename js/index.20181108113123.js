(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? 'images/22-2400.png' : 'images/22-1200.png');
$('.js-2').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_03-698.png' : 'images/wang-ye-she-ji_03-349.png');
$('.js-3').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-160.png' : 'images/xiao-tu-biao-01-80.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-180.png' : 'images/xiao-tu-biao-01-90.png');
$('.js-5').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-176.png' : 'images/xiao-tu-biao-01-88.png');
$('.js-6').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-166.png' : 'images/xiao-tu-biao-01-83.png');
$('.js-7').attr('src', (dpi>1) ? 'images/u-695126824-1221370075-fm-26-gp-0-404.jpg' : 'images/u-695126824-1221370075-fm-26-gp-0-202.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_03-190.png' : 'images/wang-ye-she-ji_03-95.png');
$('.js-9').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_05-182.png' : 'images/wang-ye-she-ji_05-91.png');
$('.js-10').attr('src', (dpi>1) ? 'images/adobe-indesign-142.png' : 'images/adobe-indesign-71.png');
$('.js-11').attr('src', (dpi>1) ? 'images/20png-28-1.png' : 'images/20png-14-1.png');
$('.js-12').attr('src', (dpi>1) ? 'images/20png-28-1.png' : 'images/20png-14-1.png');
$('.js-13').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-160.png' : 'images/xiao-tu-biao-01-80.png');
$('.js-14').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-180.png' : 'images/xiao-tu-biao-01-90.png');
$('.js-15').attr('src', (dpi>1) ? 'images/01-732.jpg' : 'images/01-366.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-176.png' : 'images/xiao-tu-biao-01-88.png');
$('.js-17').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-166.png' : 'images/xiao-tu-biao-01-83.png');
$('.js-18').attr('src', (dpi>1) ? 'images/2-732.jpg' : 'images/2-366.jpg');
$('.js-19').attr('src', 'images/99_03-1200.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2017.20-732.jpg' : 'images/2017.20-366.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/lian-xi1-732.jpg' : 'images/lian-xi1-366.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/si-ji-732.jpg' : 'images/si-ji-366.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-160.png' : 'images/xiao-tu-biao-01-80.png');
$('.js-24').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-180.png' : 'images/xiao-tu-biao-01-90.png');
$('.js-25').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-176.png' : 'images/xiao-tu-biao-01-88.png');
$('.js-26').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-166.png' : 'images/xiao-tu-biao-01-83.png');
$('.js-27').attr('src', 'images/55_03-1200.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/dianhua-200.png' : 'images/dianhua-100.png');
$('.js-29').attr('src', (dpi>1) ? 'images/weibo-176.png' : 'images/weibo-88.png');
$('.js-30').attr('src', (dpi>1) ? 'images/weixin-176.png' : 'images/weixin-88.png');
$('.js-31').attr('src', (dpi>1) ? 'images/qq-176.png' : 'images/qq-88.png');
$('.js-32').attr('src', 'images/77_03-1200.jpg');
$('.js-33').attr('src', 'images/88_03-1200.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/20png-72.png' : 'images/20png-36.png');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? 'images/22-960.png' : 'images/22-480.png');
$('.js-2').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_03-280.png' : 'images/wang-ye-she-ji_03-140.png');
$('.js-3').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-64.png' : 'images/xiao-tu-biao-01-32.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-74.png' : 'images/xiao-tu-biao-01-37.png');
$('.js-5').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-72.png' : 'images/xiao-tu-biao-01-36.png');
$('.js-6').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-66.png' : 'images/xiao-tu-biao-01-33.png');
$('.js-7').attr('src', (dpi>1) ? 'images/u-695126824-1221370075-fm-26-gp-0-162.jpg' : 'images/u-695126824-1221370075-fm-26-gp-0-81.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_03-76.png' : 'images/wang-ye-she-ji_03-38.png');
$('.js-9').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_05-74.png' : 'images/wang-ye-she-ji_05-37.png');
$('.js-10').attr('src', (dpi>1) ? 'images/adobe-indesign-58.png' : 'images/adobe-indesign-29.png');
$('.js-11').attr('src', (dpi>1) ? 'images/20png-12.png' : 'images/20png-6.png');
$('.js-12').attr('src', (dpi>1) ? 'images/20png-12.png' : 'images/20png-6.png');
$('.js-13').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-64.png' : 'images/xiao-tu-biao-01-32.png');
$('.js-14').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-74.png' : 'images/xiao-tu-biao-01-37.png');
$('.js-15').attr('src', (dpi>1) ? 'images/01-294.jpg' : 'images/01-147.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-70.png' : 'images/xiao-tu-biao-01-35.png');
$('.js-17').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-68.png' : 'images/xiao-tu-biao-01-34.png');
$('.js-18').attr('src', (dpi>1) ? 'images/2-292.jpg' : 'images/2-146.jpg');
$('.js-19').attr('src', 'images/99_03-480.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2017.20-292.jpg' : 'images/2017.20-146.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/lian-xi1-292.jpg' : 'images/lian-xi1-146.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/si-ji-292.jpg' : 'images/si-ji-146.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-66.png' : 'images/xiao-tu-biao-01-33.png');
$('.js-24').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-72.png' : 'images/xiao-tu-biao-01-36.png');
$('.js-25').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-70.png' : 'images/xiao-tu-biao-01-35.png');
$('.js-26').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-68.png' : 'images/xiao-tu-biao-01-34.png');
$('.js-27').attr('src', 'images/55_03-480.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/dianhua-80.png' : 'images/dianhua-40.png');
$('.js-29').attr('src', (dpi>1) ? 'images/weibo-72.png' : 'images/weibo-36.png');
$('.js-30').attr('src', (dpi>1) ? 'images/weixin-72.png' : 'images/weixin-36.png');
$('.js-31').attr('src', (dpi>1) ? 'images/qq-72.png' : 'images/qq-36.png');
$('.js-32').attr('src', 'images/77_03-480.jpg');
$('.js-33').attr('src', 'images/88_03-480.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/20png-28.png' : 'images/20png-14.png');}else{$('.js').attr('src', (dpi>1) ? 'images/22-640.png' : 'images/22-320.png');
$('.js-2').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_03-186.png' : 'images/wang-ye-she-ji_03-93.png');
$('.js-3').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-44.png' : 'images/xiao-tu-biao-01-22.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-50.png' : 'images/xiao-tu-biao-01-25.png');
$('.js-5').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-50.png' : 'images/xiao-tu-biao-01-25.png');
$('.js-6').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-44.png' : 'images/xiao-tu-biao-01-22.png');
$('.js-7').attr('src', (dpi>1) ? 'images/u-695126824-1221370075-fm-26-gp-0-108.jpg' : 'images/u-695126824-1221370075-fm-26-gp-0-54.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_03-52.png' : 'images/wang-ye-she-ji_03-26.png');
$('.js-9').attr('src', (dpi>1) ? 'images/wang-ye-she-ji_05-50.png' : 'images/wang-ye-she-ji_05-25.png');
$('.js-10').attr('src', (dpi>1) ? 'images/adobe-indesign-38.png' : 'images/adobe-indesign-19.png');
$('.js-11').attr('src', (dpi>1) ? 'images/20png-12.png' : 'images/20png-6.png');
$('.js-12').attr('src', (dpi>1) ? 'images/20png-12.png' : 'images/20png-6.png');
$('.js-13').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-44.png' : 'images/xiao-tu-biao-01-22.png');
$('.js-14').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-50.png' : 'images/xiao-tu-biao-01-25.png');
$('.js-15').attr('src', (dpi>1) ? 'images/01-196.jpg' : 'images/01-98.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-48.png' : 'images/xiao-tu-biao-01-24.png');
$('.js-17').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-44-1.png' : 'images/xiao-tu-biao-01-22-1.png');
$('.js-18').attr('src', (dpi>1) ? 'images/2-194.jpg' : 'images/2-97.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/99_03-640.jpg' : 'images/99_03-320.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/2017.20-194.jpg' : 'images/2017.20-97.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/lian-xi1-196.jpg' : 'images/lian-xi1-98.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/si-ji-194.jpg' : 'images/si-ji-97.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-44-1.png' : 'images/xiao-tu-biao-01-22-1.png');
$('.js-24').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-48.png' : 'images/xiao-tu-biao-01-24.png');
$('.js-25').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-48.png' : 'images/xiao-tu-biao-01-24.png');
$('.js-26').attr('src', (dpi>1) ? 'images/xiao-tu-biao-01-44-1.png' : 'images/xiao-tu-biao-01-22-1.png');
$('.js-27').attr('src', (dpi>1) ? 'images/55_03-640.jpg' : 'images/55_03-320.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/dianhua-54.png' : 'images/dianhua-27.png');
$('.js-29').attr('src', (dpi>1) ? 'images/weibo-50.png' : 'images/weibo-25.png');
$('.js-30').attr('src', (dpi>1) ? 'images/weixin-50.png' : 'images/weixin-25.png');
$('.js-31').attr('src', (dpi>1) ? 'images/qq-50.png' : 'images/qq-25.png');
$('.js-32').attr('src', (dpi>1) ? 'images/77_03-640.jpg' : 'images/77_03-320.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/88_03-640.jpg' : 'images/88_03-320.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/20png-18.png' : 'images/20png-9.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-103').mouseenter(function() { $.loadImages('images/01-1166.jpg', function() { }) });
$('.js-103').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-103-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/01-1166.jpg'; } } });
$('.js-104').mouseenter(function() { $.loadImages('images/2-1000.jpg', function() { }) });
$('.js-104').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-104-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2-1000.jpg'; } } });
$('.js-105').mouseenter(function() { $.loadImages('images/2017.20-709.jpg', function() { }) });
$('.js-105').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-105-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017.20-709.jpg'; } } });
$('.js-106').mouseenter(function() { $.loadImages('images/lian-xi1-1500.jpg', function() { }) });
$('.js-106').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-106-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/lian-xi1-1500.jpg'; } } });
$('.js-107').mouseenter(function() { $.loadImages('images/si-ji-601.jpg', function() { }) });
$('.js-107').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-107-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/si-ji-601.jpg'; } } });
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-11')[0], "1.00s", "1.30s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "1.30s", 1, 100);
wl.addAnimation($('.js-28')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-29')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-30')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-31')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-34')[0], "1.00s", "1.00s", 1, 100);
wl.start();

});