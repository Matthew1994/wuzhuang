$(function() {
    //假如不能获取用户地理信息，那么中心设为origin的原始值
    var origin = {
        latitude: 23.06209,
        longitude: 113.38654
    };
    //用一个数组存储士兵的位置
    var positions = [
        {
            latitude: 23.06209,
            longitude: 113.38654      
        },{
            latitude: 23.06109,
            longitude: 113.37654      
        },{
            latitude: 23.06309,
            longitude: 113.39654      
        },{
            latitude: 23.06359,
            longitude: 113.39254      
        }
    ];

    function init() {
        //以纬度和经度表示的地理坐标点。
        var center = new qq.maps.LatLng(origin.latitude, origin.longitude);
        var map = new qq.maps.Map(
            document.getElementById("map"), //在id="map"的 HTML 容器中创建新的地图
            {
                center: center, //初始的地图中心 
                zoom: 14 //地图等级
            }
        );

        positions.forEach(function(ele) {
            var xy = new qq.maps.LatLng(ele.latitude, ele.longitude);
            var marker = new qq.maps.Marker({
                position: xy,
                map: map
            });
        });
    }
    init();

    //---------------- table -------------
    //添加测试数据
    var initTable = function(columns, data) {
        $('#table').bootstrapTable('destroy');
        $('#table').bootstrapTable({
            columns: columns,
            data: data
        });
    }
    var columns = [
        {
            field: 'name',
            title: '姓名'
        }, {
            field: 'level',
            title: '职务'
        }, {
            field: 'res',
            title: '响应'
        }, {
            field: 'time',
            title: '时间'
        }, {
            field: 'spent',
            title: '耗时'
        }
    ];
    var historyData = [];
    for (var i = 0; i < 10; i++) {
        historyData.push({
            name: '张三',
            level: '排长',
            res: '未响应',
            time: '13',
            spent: '1'
        });
    }

    initTable(columns, historyData);
});
