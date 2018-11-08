(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-108').attr('src', (dpi>1) ? 'images/fanhui-112.png' : 'images/fanhui-56.png');
$('.js-109').attr('src', (dpi>1) ? 'images/1-01-678.jpg' : 'images/1-01-339.jpg');
$('.js-110').attr('src', (dpi>1) ? 'images/2-01-678.jpg' : 'images/2-01-339.jpg');
$('.js-111').attr('src', (dpi>1) ? 'images/3-01-678.jpg' : 'images/3-01-339.jpg');
$('.js-112').attr('src', (dpi>1) ? 'images/4-01-678.jpg' : 'images/4-01-339.jpg');
$('.js-113').attr('src', (dpi>1) ? 'images/5-01-678.jpg' : 'images/5-01-339.jpg');
$('.js-114').attr('src', (dpi>1) ? 'images/6-01-678.jpg' : 'images/6-01-339.jpg');
$('.js-115').attr('src', (dpi>1) ? 'images/7-01-678.jpg' : 'images/7-01-339.jpg');
$('.js-116').attr('src', (dpi>1) ? 'images/8-01-678.jpg' : 'images/8-01-339.jpg');
$('.js-117').attr('src', (dpi>1) ? 'images/9-01-678.jpg' : 'images/9-01-339.jpg');
$('.js-118').attr('src', (dpi>1) ? 'images/10-01-678.jpg' : 'images/10-01-339.jpg');
$('.js-119').attr('src', (dpi>1) ? 'images/feng-mian-01-678.jpg' : 'images/feng-mian-01-339.jpg');}else if($(window).width()>=480){$('.js-108').attr('src', (dpi>1) ? 'images/fanhui-44.png' : 'images/fanhui-22.png');
$('.js-109').attr('src', (dpi>1) ? 'images/1-01-960.jpg' : 'images/1-01-480.jpg');
$('.js-110').attr('src', (dpi>1) ? 'images/2-01-470.jpg' : 'images/2-01-235.jpg');
$('.js-111').attr('src', (dpi>1) ? 'images/3-01-470.jpg' : 'images/3-01-235.jpg');
$('.js-112').attr('src', (dpi>1) ? 'images/4-01-470.jpg' : 'images/4-01-235.jpg');
$('.js-113').attr('src', (dpi>1) ? 'images/5-01-466.jpg' : 'images/5-01-233.jpg');
$('.js-114').attr('src', (dpi>1) ? 'images/6-01-470.jpg' : 'images/6-01-235.jpg');
$('.js-115').attr('src', (dpi>1) ? 'images/7-01-470.jpg' : 'images/7-01-235.jpg');
$('.js-116').attr('src', (dpi>1) ? 'images/8-01-470.jpg' : 'images/8-01-235.jpg');
$('.js-117').attr('src', (dpi>1) ? 'images/9-01-470.jpg' : 'images/9-01-235.jpg');
$('.js-118').attr('src', (dpi>1) ? 'images/10-01-470.jpg' : 'images/10-01-235.jpg');
$('.js-119').attr('src', (dpi>1) ? 'images/feng-mian-01-470.jpg' : 'images/feng-mian-01-235.jpg');}else{$('.js-108').attr('src', (dpi>1) ? 'images/fanhui-30.png' : 'images/fanhui-15.png');
$('.js-109').attr('src', (dpi>1) ? 'images/1-01-640.jpg' : 'images/1-01-320.jpg');
$('.js-110').attr('src', (dpi>1) ? 'images/2-01-314.jpg' : 'images/2-01-157.jpg');
$('.js-111').attr('src', (dpi>1) ? 'images/3-01-314.jpg' : 'images/3-01-157.jpg');
$('.js-112').attr('src', (dpi>1) ? 'images/4-01-314.jpg' : 'images/4-01-157.jpg');
$('.js-113').attr('src', (dpi>1) ? 'images/5-01-310.jpg' : 'images/5-01-155.jpg');
$('.js-114').attr('src', (dpi>1) ? 'images/6-01-314.jpg' : 'images/6-01-157.jpg');
$('.js-115').attr('src', (dpi>1) ? 'images/7-01-314.jpg' : 'images/7-01-157.jpg');
$('.js-116').attr('src', (dpi>1) ? 'images/8-01-314.jpg' : 'images/8-01-157.jpg');
$('.js-117').attr('src', (dpi>1) ? 'images/9-01-314.jpg' : 'images/9-01-157.jpg');
$('.js-118').attr('src', (dpi>1) ? 'images/10-01-314.jpg' : 'images/10-01-157.jpg');
$('.js-119').attr('src', (dpi>1) ? 'images/feng-mian-01-314.jpg' : 'images/feng-mian-01-157.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-144').mouseenter(function() { $.loadImages('images/1-01-3575.jpg', function() { }) });
$('.js-144').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-144-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/1-01-3575.jpg'; } } });
$('.js-145').mouseenter(function() { $.loadImages('images/2-01-3575.jpg', function() { }) });
$('.js-145').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-145-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2-01-3575.jpg'; } } });
$('.js-146').mouseenter(function() { $.loadImages('images/3-01-3575.jpg', function() { }) });
$('.js-146').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-146-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/3-01-3575.jpg'; } } });
$('.js-147').mouseenter(function() { $.loadImages('images/4-01-3575.jpg', function() { }) });
$('.js-147').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-147-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/4-01-3575.jpg'; } } });
$('.js-148').mouseenter(function() { $.loadImages('images/5-01-3575.jpg', function() { }) });
$('.js-148').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-148-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/5-01-3575.jpg'; } } });
$('.js-149').mouseenter(function() { $.loadImages('images/6-01-3575.jpg', function() { }) });
$('.js-149').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-149-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/6-01-3575.jpg'; } } });
$('.js-150').mouseenter(function() { $.loadImages('images/7-01-3575.jpg', function() { }) });
$('.js-150').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-150-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/7-01-3575.jpg'; } } });
$('.js-151').mouseenter(function() { $.loadImages('images/8-01-3575.jpg', function() { }) });
$('.js-151').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-151-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/8-01-3575.jpg'; } } });
$('.js-152').mouseenter(function() { $.loadImages('images/9-01-3575.jpg', function() { }) });
$('.js-152').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-152-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/9-01-3575.jpg'; } } });
$('.js-153').mouseenter(function() { $.loadImages('images/10-01-3575.jpg', function() { }) });
$('.js-153').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-153-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/10-01-3575.jpg'; } } });
$('.js-154').mouseenter(function() { $.loadImages('images/feng-mian-01-3575.jpg', function() { }) });
$('.js-154').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-154-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/feng-mian-01-3575.jpg'; } } });

});