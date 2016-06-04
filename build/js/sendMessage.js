'use strict';

$(function () {
    //--------------------------------- treeview测试数据 -------------------------
    //注意：href为ajax请求数据的url
    var Node = function Node(name, child1, child2) {
        return {
            text: name,
            nodes: [child1, child2],
            tags: ['0'],
            href: '/soldier/1314'
        };
    };

    var b1 = Node('一班');
    var b2 = Node('二班');
    var p1 = Node('一排', b1, b2);
    var p2 = Node('二排', b1, b2);
    var l1 = Node('一连', p1, p2);
    var l2 = Node('二连', p1, p2);

    var defaultData = [];
    defaultData.push(l1);
    defaultData.push(l2);
    //----------------------------------------------------------------------

    var Tree = require('./treeview');
    var tree = new Tree('tree', defaultData);

    //检查有无选择发布对象
    $('#issue-form button[type="submit"]').on('click', function () {
        var selectedNodes = $('#tree').treeview('getSelected');
        if (selectedNodes.length === 0) {
            alert('请选择接受的组织！');
            return;
        }
        var nodes = selectedNodes.reduce(function (pre, cur) {
            return pre + '$$$' + cur['href'];
        }, "");
        //表单数据格式为collection='$$$/soldier/1314$$$/soldier/1314$$$/soldier/1314'
        $('#issue-form input[name="collection"]').val(nodes);
    });
});