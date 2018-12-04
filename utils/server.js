//导入express包
var express =require('express')
//创建对象
var app =express()

//解决跨域的问题
app.all('*', function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "X-Requested-With");
res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
res.header("X-Powered-By", ' 3.2.1')
res.header("Content-Type", "application/json;charset=utf-8");
next();
})
app.get('/',function (req,res) {
    let name={
        username:'tangyi',
        password:'1234567'
    }
    res.send(name)
})
var server=app.listen(8000,function () {
    console.log('访问的地址: 127.0.0.1:8000')
})