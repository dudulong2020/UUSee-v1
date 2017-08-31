#UUSee

# 概述

这个项目后端使用express，前端使用了react。

前端技术栈为
- 基础列库：react
- 路由：react-router
- 数据管理：react-redux + redux-thunk中间件 + redux-devtool
- 路由信息同步：react-router-redux
- 样式：weui + less + postcss

# 运行方式

## 安装nodejs7.6+
Mac：安装nvm，使用nvm安装响应版本Nodejs
Windows：Node.js官方安装最新版本

使用npm安装依赖：
npm install

## 开发环境运行方式
Node.js端：
npm run dev-node // 如果报错了 很可能是Node.js版本不够高

Borwser端：
npm run dev-web // 会自动打开浏览器

## 部署环境运行方式

编译代码：
npm run build

Node.js服务器：
npm run start




## 克隆项目
```
https://github.com/liuxinyi1992/UUSee-v1
```

## 进到对应目录
```
cd UUSee-v1
```

## 安装必备插件 -- (插件列表详见package.json文件)
```
npm install
```

## 项目启动方式(本地启动项目)
```
npm run dev-web
```

## 服务端启动
```
npm run dev-node
```

## 合作开发规范
> 分支
- 主分支 `master`
- 开发环境分支 `develop`
- - 每个人在`develop`下建立自己的分支
>- 分支切换命令`git checkout 分支名` ，如果没有则创建并切换，有则切换

> 代码合并
- 如果你的代码本地运行没有问题，将自己的代码提交到自己的历史区
```
git add .
git commit -m '你需要写的注释内容'

```
- 将自己的代码提交到develop分支
```
git checkout develop
git merge 你的分支名
git pull origin develop
-----------------------------
这个时候需要关注一下有没有冲突
git status
反馈红色的文件是有冲突的文件
-----------------------------
git push origin develop
```
- 再切回你自己的分支进行代码的开发
```
git checkout 你的分支名
git merge develop
尽情的开发吧
```

## 引入了weUI
> demo地址：`https://weui.io/`

> 使用方法：
- 控制台找到页面你想使用的dom元素`注意一定要找全`，
- 右键`Edit as HTML`,
- 手动拷贝到项目的render函数对应位置
- 修改拷贝的内容中`class=` 为`className=`
- 修改`style=''` 为对象形式 `style={}`,注意如果使用变量，需要再包裹一层`{}`
- 将未闭合的标签进行闭合，如拷贝过来的是`<img src....>`这样 ， 应在最后增加闭合，修改为`<img src.... />`
- 其他问题暂未碰到，后续补充

## 我们的前端代码主要写在`src`文件夹下
> 下面简单介绍下`src`下存放的每个文件夹的作用及规范
- apis          统一放置接口，根据需要新建自己的文件，调用index.js中get，post方法，传入的接口参数只要写/api之后的，
- - index.js     运用fetch获取数据，封装成get和post方法返回值是一个promise，不用操作
- components    组件的文件夹
- - Wrap  有header和footer的页面的包裹层    --不建议操作
- - MHeader     公共头部    -- 目前没有写
- - MFooter     公共底部    -- 目前只是写了一个临时版本的
- - 注意这里的文件夹的下级目录建议一个index.js，一个index.less(视实际情况添加)
- containers    页面级组件文件夹
- - Home        主页       -- 需要完善
- - profile     个人中心页  -- 需要完善
- main          入口文件文件夹
- - main.js     项目入口文件
- redux         redux相关内容文件夹
- - actions      用于书写action代码，根据需要新建自己的文件输出派发行为函数组成的对象
- - reducers     用于书写reucer代码，根据需要新建自己的文件输出reudcer函数，再在index.js文件中引入合并
- - action-types 用于统一声明派发行为名称，根据自己需求添加
- - store         创建仓库，不建议操作


##template      模板文件夹
- index.html  主模板文件

## 我们的后端代码主要写在`server`文件夹下
- 本地启动node服务端
```
npm run dev-node
```
- 监听端口 16666

- mock          JSON文件文件夹
- - api          放我们的JSON文件，假数据可以在这里创建JSON文件
- model         用于创建mongo表单，定义数据格式，根据需要新建自己的文件
- routers       放置node代码
- - api          我们的node代码写在这里

首先
根据需求新建自己的文件，格式如下
```
//引入外部文件
module.exports = (router)=> {
//get,post代码书写区域
}
```
其次
在index.js文件中引入并执行，例如
```
let home=require('./home');
home(router)
```
- server.js   不用修改

## 关于自己模拟数据
>
- 监听请求写在`server.js`中，
- 模拟的数据写在`mock/api/`这个文件夹下，自己对应的写一个json文件




    



