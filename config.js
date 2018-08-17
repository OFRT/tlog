var html;
var config = {
	// head
	html_head_file: "mode/htm/head/bootstrap.htm",
	html_title: "闲言碎语", // Title
	html_css: null, // CSS
	html_js: null, // JS
	html_ico: "/favicon.ico", // ICO
	// nav
	nav: false,
	nav_file: null,
	nav_js: '',
	// headMap
	headMap: false,
	headMap_file: 'mode/htm/headMap/headMapVideo.htm',
	headMap_js: 'mode/js/templatemo-script.js',
	// content
	content: true,
	content_file: 'mode/htm/content/contentList.htm',
	content_js: 'mode/mjs/contentList.js',
	content_json: 'mode/mjs/contentList.json',
	content_mode: true, // true正序，false倒序
	// top
	top: false,
	top_file: null,
	top_js: '',
	// footer
	footer: true,
	footer_file: "mode/htm/footer/pages.coding.htm",
	footer_js: null,
	// weather
	weather: true,
	weather_js: 'mode/mjs/weather.js',
};

jQuery(function($) {
	// 修改异步加载为同步加载
	$.ajaxSettings.async = false;
	
	// head
	$.get(config.html_head_file, function(text) {
		var str = '<head>';
		str += '<title>' + config.html_title + '</title>';
		str += text;
		
		if (config.html_css) str += '<link rel="stylesheet" href="' + config.html_css + '" />';
		if (config.html_ico) str += '<link rel="shortcut icon" href="' + config.html_ico + '" type="image/x-icon" />';
		
		str += '</head>';
		
		document.getElementById('div-head').innerHTML = str;
	});

	// nav
	if (config.nav) {
		$.get(config.nav_file, function(text) {
			document.getElementById('nav').innerHTML = text;
		});
	}
	// headMap
	if (config.headMap) {
		$.get(config.headMap_file, function(text) {
			$('#headMap_other').addClass('container');
			document.getElementById('headMap_other').innerHTML = text;
			document.getElementById('header_title').innerHTML = ""
				+ '<div class="tm-site-logo"></div>' // LOGO
				+ '<h1 class="pl-4 tm-site-title">' + config.html_title + '</h1>'; // Title
		});
	}
	// content
	if (config.content) {
		$.get(config.content_file, function(text) {
			// $('#content').addClass('container');
			document.getElementById('content').innerHTML = text;
		});
	}
	
	// 修改同步加载为异步加载
	$.ajaxSettings.async = true;
});

if (config.nav) { loadJS(config.nav_js); }
if (config.headMap) { loadJS(config.headMap_js); }
if (config.content) { loadJS(config.content_js); }
if (config.top) { loadJS(config.top_js); }
if (config.weather) { loadJS(config.weather_js); }

// 动态异步加载JS
function loadJS(js_url) {
	if (js_url != null && js_url != '') {
		document.write('<script src="' + js_url + '"></script>');
	}
}
