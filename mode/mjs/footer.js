// 修改异步加载为同步加载
$.ajaxSettings.async = false;

$.get(config.footer_file, function(text) {
	document.getElementById('footer').innerHTML = "<br>" + text;
	document.getElementById('footer_title').innerHTML = config.html_title;
});

// 修改同步加载为异步加载
$.ajaxSettings.async = true;