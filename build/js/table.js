$(function () {
    //添加测试数据
    var initTable = function (columns, data) {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
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
    };
    var columns = [{
        field: 'id',
        title: '序号'
    }, {
        field: 'name',
        title: '姓名'
    }, {
        field: 'honor',
        title: '职务'
    }, {
        field: 'lian',
        title: '连'
    }, {
        field: 'pai',
        title: '排'
    }, {
        field: 'ban',
        title: '班'
    }, {
        field: 'phone',
        title: '手机'
    }, {
        field: 'wechat',
        title: '微信'
    }, {
        field: 'operation',
        title: '操作'
    }];
    var soldierData = [];
    var leaderData = [];
    for (var i = 0; i < 20; i++) {
        soldierData.push({
            id: i + 1,
            name: '张三',
            honor: '班长',
            lian: '三',
            pai: '一',
            ban: '二',
            phone: '13015874562',
            wechat: 'okokoko',
            operation: '修改信息'
        });
        leaderData.push({
            id: i + 1,
            name: '李四',
            honor: '将军',
            lian: '三',
            pai: '四',
            ban: '五',
            phone: '18715836562',
            wechat: '4525252',
            operation: '修改信息'
        });
    }

    initTable(columns, soldierData);

    $('#tag > div').on('click', function () {
        $(this).addClass('enable');
        $(this).removeClass('disable');
        $(this).siblings().addClass('disable');
        $(this).siblings().removeClass('enable');

        if ($(this).text() === "民兵") {
            initTable(columns, soldierData);
        } else {
            initTable(columns, leaderData);
        }
    });
});