'use strict';

$(document).on('ready', function () {
	$("#input-44").fileinput({
		// 请求url
		uploadUrl: '/file-upload-batch/2',
		maxFilePreviewSize: 10240,
		allowedFileExtensions: ["jpg", "png", "gif"],
		language: "zh"
	});
});