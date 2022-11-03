# 基础知识

## ESM 和 CJS

不同的模块规范，Node.js 实现了 CJS，ES6 实现了 ESM

> 在`package.json`中添加`"type": "module"`可以在 Node.js 中使用 ESM

<CodeGroup>
<CodeGroupItem title="ESM">

```js
// 导出
export { xxx }
export default xxx
// 引入
import { xxx } from 'xxx'
import xxx from 'xxx'
```

</CodeGroupItem>

<CodeGroupItem title="CJS">

```js
// 导出
module.exports = xxx
module.exports = { xxx }
// 引入
const xxx = require('xxx')
const { xxx } = require('xxx')
```

</CodeGroupItem>
</CodeGroup>

## npm 使用

npm 主要负责对包进行管理，可以使用`npm init`来生成一个`packages.json`文件进行配置

```shell
# 安装依赖
npm install xxx
# 安装开发环境依赖
npm install xxx -D
# 安装全局依赖
npm install xxx -g
# 移除依赖
npm uninstall xxx
# 查看依赖列表
npm list
```

## 如何执行 node 文件

在终端中输入`node [文件名]`可以执行 node 文件，如果有监听事件则会持续监听

> 可以使用[nodemon](https://www.npmjs.com/package/nodemon)等包来实现代码改动自动重启服务，方便开发
