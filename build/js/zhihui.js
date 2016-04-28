$(function () {
	//添加测试数据
	var initTable = function (columns, data) {
		$('#table').bootstrapTable('destroy');
		$('#table').bootstrapTable({
			columns: columns,
			data: data
		});
	};
	var columns = [{
		field: 'id',
		title: '序号'
	}, {
		field: 'date',
		title: '日期'
	}, {
		field: 'position',
		title: '集合地点'
	}, {
		field: 'time',
		title: '用时'
	}];
	var historyData = [];
	for (var i = 0; i < 20; i++) {
		historyData.push({
			id: i + 1,
			date: '2015.12.13-12：30~13：50',
			position: '海珠区公安局',
			time: '1小时20分'
		});
	}

	initTable(columns, historyData);
	/*
 $('#tag > div').on('click', function(){
 	$(this).addClass('enable');
 	$(this).removeClass('disable');
 	$(this).siblings().addClass('disable');
 	$(this).siblings().removeClass('enable');
 
 
 	if ($(this).text() === "民兵") {
 		initTable(columns, soldierData);
 	}
 	else {
 		initTable(columns, leaderData);
 	}
 });
 */
});