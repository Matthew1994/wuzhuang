$(function() {
	//添加测试数据
	var initTable = function(className, columns, data) {
		$(className).bootstrapTable('destroy');
		$(className).bootstrapTable({
			//url: "duoBaoActivityList",
            //dataType: "json",
            pagination: true, //分页
            //singleSelect: false,
            //data - locale: "zh-US", //表格汉化
            //search: true, //显示搜索框
            //sidePagination: "server", //服务端处理分页
	    	columns: columns,
	    	data: data
		});
	}
	var columns = [
		{
	        field: 'id',
	        title: '序号',
	        sortable: true
	    }, {
	        field: 'date',
	        title: '日期',
	        sortable: true
	    }, {
	        field: 'position',
	        title: '集合地点',
	        sortable: true
	    }, {
	        field: 'time',
	        title: '用时',
	        sortable: true
	    }
	];
	var historyData = [];
	for (var i = 0; i < 20; i++) {
		historyData.push({
	        id: i+1,
	        date: '2015.12.13-12：30~13：50',
	        position: '海珠区公安局',
	        time: '1小时20分',
	    });
	}
	// 根据不同类型的数据传入参数
	initTable('#on-going', columns, historyData);
	initTable('#history', columns, historyData);
});
