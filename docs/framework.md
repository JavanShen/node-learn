# 框架

## [express](https://expressjs.com/)

### 路由

创建服务器，并会对 `/` 路径响应，支持原生的 `res.write()` 写法， `res.send()` 接受 `HTML` 和对象

```js
const app = express()

app.get('/', (req, res) => {
    res.send('this is express')
})

app.listen(3000, () => {
    console.log('server start')
})
```

提供了一些占位符来响应某些特定的路由

@[code{9-27}](@/express/router.js)

当然也支持正则表达式

@[code{29-31}](@/express/router.js)

### 中间件

路径后面的函数称之为中间件，也就是在响应内容之前做一些事情，中间件可以有多个，通过 `next()` 来继续

@[code{33-46}](@/express/router.js)

或者将它们分离出来，传入一个数组代替

@[code{48-61}](@/express/router.js)

#### 应用级中间件

以上都可以算是应用级中间件，直接挂载在 `express()` 上

如果要在所有中间件前添加一个中间件可以这样

@[code{5-9}](@/express/middleware/index.js)

#### 路由级中间件

通过 `express.Router()` 创建一个路由，然后在这个路由上挂载中间件

@[code{3-7}](@/express/middleware/router.js)

接着可以将它导出，然后在 `express()` 上使用

@[code{12-12}](@/express/middleware/index.js)

通过路由级中间件，我们可以把路由进行更细致的划分，比如将 api 统一管理

@[code{3-11}](@/express/middleware/router.js)

```js
const app = express()

app.use('/api', router)
// /api/a /api/b
```
