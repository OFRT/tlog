var imges = new Array(
	"./mode/img/img-01.jpg",
	"./mode/img/img-02.jpg",
	"./mode/img/img-03.jpg",
	"./mode/img/img-04.jpg",
	"./mode/img/img-01.jpg",
	"./mode/img/img-02.jpg",
	"./mode/img/img-03.jpg",
	"./mode/img/img-04.jpg",
	"./mode/img/img-01.jpg",
	"./mode/img/img-02.jpg",
	"./mode/img/img-03.jpg",
	"./mode/img/img-04.jpg",
);

jQuery(function($) {
	$.get(config.content_json, function(contentNodeList) {
		// 遍历JSON对象
		Object.keys(contentNodeList).forEach(function(node){
			if (node != 'end') {
				if (config.content_mode) {
					$('#content_list').append(createContentNode(contentNodeList[node], randomNum(0,11)));
				} else {
					$('#content_list').prepend(createContentNode(contentNodeList[node], randomNum(0,11)));
				}
			} else {
				$('#content_list').append(createContentNode(contentNodeList[node], randomNum(0,11), true));
			}
		});
		$('#content_list').prepend(createContentWeatherNode());
	});
});

function createContentNode(node, randomN, mode = false) {
	var out = '';
	out += '<div class="tm-timeline-item-inner">';
	if (node.img) out += '<img src=' + node.img + ' alt="Image" class="rounded-circle tm-img-timeline">';
	else out += '<img src=' + imges[randomN] + ' alt="Image" class="rounded-circle tm-img-timeline">';
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

function createContentWeatherNode(mode = false) {
	var out = '';
	out += '<div class="tm-timeline-item-inner">';
	out += '<img src=' + imges[randomNum(0,11)] + ' alt="Image" class="rounded-circle tm-img-timeline">';
	out += '<div class="tm-timeline-connector">';
	out += '<p class="mb-0">&nbsp;</p>';
	out += '</div>';
	// out += '<div class="tm-timeline-description-wrap">';
	out += '<div class="tm-bg-dark tm-timeline-description">';
	out += '<dir id="weather-v2-plugin-simple"></div>';
	out += '</div>';
	out += '</div>';
	out += '</div>';
	if (!mode) out += '<div class="tm-timeline-connector-vertical"></div>';
	out += '</div>';
	return out;
}

function randomNum(min,max){
    switch(arguments.length){
        case 1:
            return Math.floor(Math.random()*minNum+1);
        break;
        case 2:
            return Math.floor(Math.random()*(max-min+1)+min);
        break;
            default:
                return 0;
            break;
    }
}
