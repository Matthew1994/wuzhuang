'use strict';

$(function () {

	//服务器传入配置信息
	wx.config({
		debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: '', // 必填，公众号的唯一标识
		timestamp: '', // 必填，生成签名的时间戳
		nonceStr: '', // 必填，生成签名的随机串
		signature: '', // 必填，签名，见附录1
		jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});

	wx.ready(function () {
		console.log('config ends');
	});
	wx.error(function (res) {
		console.log('fail');
	});

	//后端传入位置信息
	var location = {
		latitude: 23,
		longitude: 24
	};

	$('.content button').on('click', function () {
		console.log('Action: click');
		wx.openLocation({
			latitude: location.latitude, // 纬度，浮点数，范围为90 ~ -90
			longitude: location.longitude, // 经度，浮点数，范围为180 ~ -180。
			name: '', // 位置名
			address: '', // 地址详情说明
			scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
			infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
		});
	});
});