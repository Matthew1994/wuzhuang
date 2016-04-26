$(function () {
    //假如不能获取用户地理信息，那么中心设为origin的原始值
    var origin = {
        latitude: 23.06209,
        longitude: 113.38654
    };

    function init() {
        //以纬度和经度表示的地理坐标点。
        var center = new qq.maps.LatLng(origin.latitude, origin.longitude);
        var map = new qq.maps.Map(document.getElementById("map"), //在id="map"的 HTML 容器中创建新的地图
        {
            center: center, //初始的地图中心
            zoom: 14 //地图等级
        });

        var marker = new qq.maps.Marker({
            position: center,
            map: map
        });
        //绑定单击事件添加参数
        qq.maps.event.addListener(map, 'click', function (event) {
            marker.setPosition(event.latLng);
            var xy = '(' + event.latLng.getLat().toFixed(6) + ", " + event.latLng.getLng().toFixed(6) + ')';
            $("#issue-form input[name='position']")[0].value = xy;
        });

        /*
        //获取坐标所在位置的中文描述，这个功能需要申请api-key
        var url3;
        qq.maps.event.addListener(map, "click", function(e) {
            url3 = encodeURI("http://apis.map.qq.com/ws/geocoder/v1/?location=" + e.latLng.getLat() + "," + e.latLng.getLng() + "&key=TRQBZ-BYV3I-S64GO-5U3MJ-CCDIF-35FDN&output=jsonp&&callback=?");
            var xy = '(' + e.latLng.getLat().toFixed(6) + ", " + e.latLng.getLng().toFixed(6) + ')';
            $.getJSON(url3, function(result) {
                if (result.result != undefined) {
                    $("#issue-form input[name='position']")[0].value = xy + ' ' + result.result.address;
                } else {
                	$("#issue-form input[name='position']")[0].value = xy;
                }
              })
        });
        */
    }
    if (!!navigator.geolocation) {
        //返回当前位置，需要请求用户是否能获取其地理位置
        navigator.geolocation.getCurrentPosition(function (position) {
            origin.latitude = position.coords.latitude;
            origin.longitude = position.coords.longitude;
            init();
        }, function (err) {
            init();
        });
    } else {
        init();
    }
});