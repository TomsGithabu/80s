const express = require('express');
const app = express();
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
app.get('/',function(req,res){
    let data ={
        status: true,
        data:[
            {
                href: 'https:www.baidu.com',
                img: 'http://ww1.sinaimg.cn/mw690/eba8a2f6ly1fz1khh9yctj20670890t3.jpg',
                name: '测试1',
                span:'一部关于中西方教育的比较和学习 更新至BD中英双字'

            },
            {
                href: 'https:www.baidu.com',
                img: 'http://ww1.sinaimg.cn/mw690/eba8a2f6ly1fz1khh9yctj20670890t3.jpg',
                name: '测试1阿斯顿撒',
                span:'一部关于中西方教育的比较和学习 更新至BD中英双字'
            },
            {
                href: 'https:www.baidu.com',
                img: 'http://ww1.sinaimg.cn/mw690/eba8a2f6ly1fz1khh9yctj20670890t3.jpg',
                name: '测试asd',
                span:'一部关于中西方教育的比较和学习 更新至BD中英双字'
            },
            {
                href: 'https:www.baidu.com',
                img: 'http://ww1.sinaimg.cn/mw690/eba8a2f6ly1fz1khh9yctj20670890t3.jpg',
                name: '测试3',
                span:'一部关于中西方教育的比较和学习 更新至BD中英双字'
            },
            {
                href: 'https:www.baidu.com',
                img: 'http://ww1.sinaimg.cn/mw690/eba8a2f6ly1fz1khh9yctj20670890t3.jpg',
                name: '测试2',
                span:'一部关于中西方教育的比较和学习 更新至BD中英双字'
            },


        ]
    };
    res.json(data);
});

app.listen(8081);