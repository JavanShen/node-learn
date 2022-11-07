# http 模块

## 引入

<CodeGroup>
<CodeGroupItem title='ESM'>

```js
import http from 'http'
```

</CodeGroupItem>

<CodeGroupItem title='CJS'>

```js
const http = require('http')
```

</CodeGroupItem>
</CodeGroup>

## 创建服务器

使用 `createServer` 可以创建一个 `Server` 实例，可以传入一个回调函数，之后每次请求都会调用这个函数，并传参 [req](./http.md#req) 和 [res](./http.md#res)
@[code{3-5}](@/http/index.js)

也可以监听 `request` 方法来对每次请求处理
@[code{7-9}](@/http/index.js)

然后需要监听某个端口号
@[code{11-13}](@/http/index.js)

> 现在你可以访问`localhost:3000`来请求服务器了，但是没有内容，我们还需要响应请求

### req

包含了请求时的信息，比如 url

### res

调用 `res.write()` 可以返回内容给客户端，最后需要调用 `res.end()` 来结束返回

## 响应请求

### res.write()

可以返回各种内容

```js
// 返回普通的字符串
res.write('abc')
// 返回html标签
res.write('<b>abc</b>')
// 返回json
res.wirte('[1,2,3]')
```

### res.writeHead()

用来指定响应头

如下，返回了 200 的状态，指定返回类型 `html` ，编码使用 `urf-8`

```js
res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
```

> 使用`utf-8`编码可以支持我们返回中文

### res.end()

结束返回，你也可以在这里最后返回一些数据

```js
res.end('abc')
```

## 根据 url 返回不同的内容

现在你改变路径看到的都是相同的内容，我们可以在每次请求时候根据 url 返回不同内容

首先从 [req](./http.md#req) 中获取 url

```js
const { url } = req
```

接着就可以根据 url 来做一些事情

下面定义了一个 `renderHtml` 函数，可以根据传入的 url 返回不同内容
@[code{15-25}](@/http/responseByUrl.js)

使用

```js
res.write(renderHtml(url))
```

有关 url 的更多内容可以查看 [url 模块](./url.md)

## JSONP

JSONP 是一种跨域手段，主要原理就是利用了 `script` 标签的 src 请求不受同源限制，去请求一个 js 文件，文件中执行我们指定的方法同时将我们需要的数据作为参数传递进去

现在我们通过 Node.js 去实现一个 JSONP 接口

@[code](@/http/jsonp/index.js)

接着编写前端的请求

@[code](@/http/jsonp/index.html)

然后在不同的端口号上打开页面，可以看到控制台成功输出了数据

## CORS

除了 JSONP，也可以在后端直接设置 CORS，解除其他源访问我们 api 的限制

```js
res.writeHead(200, {
    'Content-Type': 'application/json;charset=utf-8',
    // 设置cors头，允许所有域访问
    'access-control-allow-origin': '*'
})
```

> 也可以指定某个域名

## 代理

以上是对自己服务器 api 跨域的处理，而如果在前端想访问其他网站的 api，可以在 Node.js 进行一个代理。用 Node.js 去请求其他接口，然后返回给前端

### https

接下来需要用到 `https` 模块

<CodeGroup>
<CodeGroupItem title='ESM'>

```js
import https from 'https'
```

</CodeGroupItem>

<CodeGroupItem title='CJS'>

```js
const https = require('https')
```

</CodeGroupItem>
</CodeGroup>

### get

使用 `https.get` 来发起 GET 请求

创建一个 `get` 函数，接收一个回调并将最终的数据传递出去
@[code{5-18}](@/http/cors/get.js)

使用

```js
get(data => {
    res.end(data)
})
```

### request

使用 `https.request` 来发起 POST 请求

创建一个 `request` 函数，和 `get` 函数相同的效果，不过这次多了配置以及用 `write()` 传入 POST 数据

@[code{5-36}](@/http/cors/request.js)

使用

```js
request(data => {
    res.end(data)
})
```
