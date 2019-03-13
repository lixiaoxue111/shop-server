const mongoose = require('mongoose');
const db = 'mongodb://localhost/shop';
//引入 schema
const glob = require('glob');
const path = require('path');
exports.initSchemas = () => {
    //获取当前项目的绝对地址
    glob.sync(path.resolve(__dirname, './model', '*.js')).forEach(require);
};
exports.connect =() => {
    //连接数据库
    mongoose.connect(db,{useNewUrlParser:true});
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(db);
    });
    //数据库出现错误
    mongoose.connection.on('error',err=> {
        console.log(err);
        mongoose.connect(db);
    });
    //连接成功
    mongoose.connection.once('open',()=>{
        console.log('connect success');
    })
};
