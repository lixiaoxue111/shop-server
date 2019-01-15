const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

//创建数据库模型 ， 相当于数据库中的表
const userSchema = new Schema({
    userId: Schema.Types.ObjectId,//表示唯一标识
    userName: { unique: true, type: String },
    password: String,
    createDate: { type: Date, default: Date.now() }
});
//加密
userSchema.pre('save',function (next) {//在save方法执行之前执行
    bcrypt.genSalt(10,(err,salt)=>{//随机生salt ，10代表迭代次数
        if (err) return next(err);
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);
            this.password = hash;
            next();
        })
    })
});

//在模型下定义方法
userSchema.methods = {
    //验证密码
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if (!err){
                    resolve(isMatch);
                } else {
                    reject(err);
                }
            })
        })
    }
};

//发布模型，之后才可以正常使用
mongoose.model('User',userSchema);