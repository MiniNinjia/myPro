/**
 * Created by Administrator on 2017/9/26.
 */
// 遍历单个节点
function traverseNode(node){
    console.log(node.name);
}

// 递归遍历树
// 作者：张超
function traverseTree(node){
    if (!node) {
        return;
    }

    traverseNode(node);
    if (node.children && node.children.length > 0) {
        var i = 0;
        for (i = 0; i < node.children.length; i++) {
            this.traverseTree(node.children[i]);
        }
    }
}
var root = {
    name:'D盘',
    children:[
        {
            name:'学习',
            children:[
                {
                    name:'电子书',
                    children:[
                        {
                            name:'文学',
                            children:[
                                {
                                    name:'茶馆'
                                },
                                {
                                    name:'红与黑'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name:'电影',
            children:[
                {
                    name:'美国电影'
                },
                {
                    name:'日本电影'
                }
            ]
        }
    ]
}
traverseTree(root);