jQuery(function($) {
	$.get(config.content_json, function(contentNodeList) {
		// 遍历JSON对象
		Object.keys(contentNodeList).forEach(function(node){
			if (node != 'end') {
				if (config.content_mode) {
					$('#content_list').append(createContentNode(contentNodeList[node]));
				} else {
					$('#content_list').prepend(createContentNode(contentNodeList[node]));
				}
			} else {
				$('#content_list').append(createContentNode(contentNodeList[node], true));
			}
		});
	});
});

function createContentNode(node, mode = false) {
	var out = '';
	out += '<div class="tm-timeline-item-inner">';
	out += '<img src=' + node.img + ' alt="Image" class="rounded-circle tm-img-timeline">'
	out += '<div class="tm-timeline-connector">';
	out += '<p class="mb-0">&nbsp;</p>';
	out += '</div>';
	out += '<div class="tm-timeline-description-wrap">';
	out += '<div class="tm-bg-dark tm-timeline-description">';
	out += '<h3 class="tm-text-green tm-font-400">' + node.title + '</h3>';
	out += '<p>' + node.content + '</p>';
	out += '<p class="tm-text-green float-right mb-0">' + node.time + '</p>';
	out += '</div>';
	out += '</div>';
	out += '</div>';
	if (!mode) out += '<div class="tm-timeline-connector-vertical"></div>';
	out += '</div>';	
	return out;
}