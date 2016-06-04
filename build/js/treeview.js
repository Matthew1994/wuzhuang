"use strict";

var Tree = function Tree(id, defaultData) {
    $('#' + id).treeview({
        //data: defaultData,
        //showTags: true,
        levels: 3,
        multiSelect: true,
        //expandIcon: "glyphicon glyphicon-stop",
        //collapseIcon: "glyphicon glyphicon-unchecked",
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