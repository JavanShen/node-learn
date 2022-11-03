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

使用`createServer`可以创建一个`Server`实例，可以传入一个回调函数，之后每次请求都会调用这个函数，并传参 [req](./http.md#req) 和 [res](./http.md#res)
@[code{3-5}](@/http/index.js)

也可以监听`request`方法来对每次请求处理
@[code{7-9}](@/http/index.js)

然后需要监听某个端口号
@[code{11-13}](@/http/index.js)

### req

包含了请求时的信息，比如 url

### res

调用`res.write()`可以返回内容给客户端，最后需要调用`res.end()`来结束返回

## 返回内容

使用`res.write()`可以返回各种内容

```js
//返回普通的字符串
res.write('one')
//返回html标签
res.write('<b>more</b>')
```
