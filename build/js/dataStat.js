'use strict';

$(function () {

    var filter = {
        timestamp: null,
        dataSrc: '/1'
    };
    var refreshTable = function refreshTable() {
        console.log(filter);
        //根据filter获取数据,然后调用initTable方法
        //initTable(columns, soldierData);
    };
    var initTable = function initTable(columns, data) {
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

    //添加测试数据
    var columns = [{
        field: 'id',
        title: '序号',
        sortable: true
    }, {
        field: 'organization',
        title: '单位名称',
        sortable: true
    }, {
        field: 'total',
        title: '单位人数',
        sortable: true
    }, {
        field: 'meetCounts',
        title: '集合次数',
        sortable: true
    }, {
        field: '',
        title: '总集合人数',
        sortable: true
    }, {
        field: '',
        title: '总响应人数',
        sortable: true
    }, {
        field: 'ban',
        title: '平均响应时间',
        sortable: true
    }, {
        field: 'phone',
        title: '总响应率',
        sortable: true
    }, {
        field: 'wechat',
        title: '总签到人数',
        sortable: true
    }, {
        field: 'operation',
        title: '平均签到时间',
        sortable: true
    }, {
        field: 'operation',
        title: '总签到率',
        sortable: true
    }];
    var soldierData = [];
    var publicData = [];
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
        publicData.push({
            id: i + 1,
            name: '6666',
            honor: '班长',
            lian: '三',
            pai: '一',
            ban: '二',
            phone: '18745884562',
            wechat: 'adfa',
            operation: '修改信息'
        });
    }

    initTable(columns, soldierData);

    // timedate picker
    $('.date-picker').datetimepicker({
        language: 'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    }).on('hide', function (ev) {
        filter['timestamp'] = ev.date.valueOf();
        refreshTable();
    });

    $('.collection-data').on('click', function (e) {
        var node = $('.btn-primary.collection-data')[0],
            val = node.className;
        node.className = val.replace('btn-primary', '');
        if (this.className.match('btn-primary')) return;else {
            this.className += ' btn-primary ';
            var src = this.getAttribute('data-src');

            //切换数据,这里是展示用的，生产环境在下面
            if (src == "/1") {
                initTable(columns, soldierData);
            } else {
                initTable(columns, publicData);
            }

            //生产环境
            filter['dataSrc'] = src;
            refreshTable();
        }
    });
});