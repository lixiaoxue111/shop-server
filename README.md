# shop-server
#### npm install
#### 服务端URL ：http://localhost:3000/
#### tips
- code：200 表示成功
- code：201 表示失败
- code：500 表示服务端错误
#### 1. 注册
GET/registUser
```
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: '注册成功'
        };
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: err
        };
    });
```
#### 2. 登录
POST/loginUser
```
ctx.body = {
    code: 200,
    message: '登录成功',
    userInfo: result
 }
 ctx.body = {
   code: 201,
   message: '登录失败'
};
```
#### 3. 商品
- 获取商品数据 ： GET/insertProductInfo
- 获取商品类型 ： GET/getProductsByType
- 获取商品详情 ： GET/getDetail
#### 4. 购物车
- 添加 ： POST/addCart
- 获取 ： GET/getCart
### 相关技术
#### 1. koa
- npm install koa --save
#### 2. mongoose
- 是node和MongoDB数据通讯的数据建模库
- 安装： npm install mongoose --save
#### 3. schena 定义数据模型 ， 并引入，依赖glob
- 安装glob ： npm install glob --save
#### 4. koa路由
- npm install koa-router --save
#### 5. bodyparser
- 解析Post参数
- npm install koa-bodyparser --save
#### 6. bcrypt加盐加密
- npm install bcrypt --save
#### 7. koa2-cors
- 解决跨域：npm install koa2-cors --save
