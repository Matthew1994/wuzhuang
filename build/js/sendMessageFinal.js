(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./treeview":2}],2:[function(require,module,exports){
"use strict";

var Tree = function Tree(id, defaultData) {
    $('#' + id).treeview({
        //data: defaultData,
        //showTags: true,
        levels: 3,
        multiSelect: true,
        expandIcon: "glyphicon glyphicon-stop",
        collapseIcon: "glyphicon glyphicon-unchecked",
        nodeIcon: "glyphicon glyphicon-user",
        /*
        color: "yellow",
        backColor: "purple",
        onhoverColor: "orange",
        borderColor: "red",
        */
        showBorder: true,
        //showTags: true,
        highlightSelected: true,
        selectedColor: "yellow",
        //selectedBackColor: "darkorange",
        data: defaultData
    });

    $('#tree').on('nodeUnselected', function (event, data) {
        unSelectAllChildren(data);
        unSelectAllParent(data);

        function unSelectAllParent(data) {
            if (data.parentId === undefined) return;
            var parent = $('#tree').treeview('getParent', data);

            $('#tree').treeview('unselectNode', [parent.nodeId, {
                silent: true
            }]);
            if (parent.parentId != undefined) {
                unSelectAllParent(parent);
            }
        }

        function unSelectAllChildren(data) {
            if (Array.isArray(data.nodes)) {
                data.nodes.forEach(function (child) {
                    $('#tree').treeview('unselectNode', [child.nodeId, {
                        silent: true
                    }]);
                    $('#tree').treeview('expandNode', [data.nodeId, {
                        silent: true,
                        ignoreChildren: false
                    }]);
                    unSelectAllChildren(child);
                });
            }
        }
    });

    $('#tree').on('nodeSelected', function (event, data) {
        selectAll(data);

        // 所有返回选中的对象
        //var selectedNode = $('#tree').treeview('getSelected');
        //console.log(selectedNode);
        function selectAll(data) {
            if (Array.isArray(data.nodes)) {
                data.nodes.forEach(function (child) {
                    $('#tree').treeview('selectNode', [child.nodeId, {
                        silent: true
                    }]);
                    $('#tree').treeview('expandNode', [data.nodeId, {
                        silent: true,
                        ignoreChildren: false
                    }]);
                    selectAll(child);
                });
            }
        }
    });
};
module.exports = Tree;
},{}]},{},[1]);
