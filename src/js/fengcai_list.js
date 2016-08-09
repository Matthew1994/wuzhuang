$(function() {    
    //---------------- table -------------
    //添加测试数据
    var initTable = function(cssSelector, columns, data) {
        $(cssSelector).bootstrapTable('destroy');
        $(cssSelector).bootstrapTable({
            //url: "duoBaoActivityList",
            //dataType: "json",
            pagination: true, //分页
            pageList: [3,5,10,20],
            pageSize:10,
            pageNumber:1,
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
            field: 'dest',
            title: '选送单位',
            sortable: true
        }, {
            field: 'title',
            title: '标题',
            sortable: true
        }, {
            field: 'operate',
            title: '操作'
        }
    ];
    var historyData = [];
    for (var i = 0; i < 20; i++) {
        var id = i;
        historyData.push({
            id: id,
            dest: 'A单位',
            title: '见义勇为',
            //这里需要构造url
            operate: '<a href="/'+id+'" class="btn btn-info">编辑</a><a href="/'+id+'" class="ml20 btn btn-danger">删除</a>'
        });
    }

    initTable('#table-fengcai', columns, historyData);
});
