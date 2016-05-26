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
    /*
    $('#tag > div').on('click', function() {
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
    */
    // tree-view
    var defaultData = [{
        text: 'Parent 1',
        href: '#parent1',
        tags: ['4'],
        nodes: [{
            text: 'Child 1',
            href: '#child1',
            tags: ['2'],
            nodes: [{
                text: 'Grandchild 1',
                href: '#grandchild1',
                tags: ['0']
            }, {
                text: 'Grandchild 2',
                href: '#grandchild2',
                tags: ['0']
            }]
        }, {
            text: 'Child 2',
            href: '#child2',
            tags: ['0']
        }]
    }, {
        text: 'Parent 2',
        href: '#parent2',
        tags: ['0'],
        nodes: [{
            text: 'Grandchild 1',
            href: '#grandchild1',
            tags: ['0']
        }, {
            text: 'Grandchild 2',
            href: '#grandchild2',
            tags: ['0']
        }]
    }, {
        text: 'Parent 3',
        href: '#parent3',
        tags: ['0']
    }, {
        text: 'Parent 4',
        href: '#parent4',
        tags: ['0']
    }, {
        text: 'Parent 5',
        href: '#parent5',
        tags: ['0']
    }];

    $('#tree').treeview({
        //data: defaultData,
        //showTags: true,
        levels: 3,
        //multiSelect: true,

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
    /*
    $('#tree').on('nodeUnselected', function(event, data) {
        unSelectAllChildren(data);
        unSelectAllParent(data);
          function unSelectAllParent(data) {
            if (data.parentId === undefined)
                return;
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
                data.nodes.forEach(function(child) {
                    $('#tree').treeview('unselectNode', [child.nodeId, {
                        silent: true
                    }]);
                    $('#tree').treeview('expandNode', [data.nodeId, {
                        silent: true,
                        ignoreChildren: false
                    }]);
                    unSelectAllChildren(child);
                    //console.log(child.nodeId);
                });
            }
        }
      });
        $('#tree').on('nodeSelected', function(event, data) {
        selectAll(data);
          // 所有返回选中的对象
        //var selectedNode = $('#tree').treeview('getSelected');
        //console.log(selectedNode);
        function selectAll(data) {
            if (Array.isArray(data.nodes)) {
                data.nodes.forEach(function(child) {
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
    */
});