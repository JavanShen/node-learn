# url 模块

## 引入

<CodeGroup>
<CodeGroupItem title='ESM'>

```js
import url, { URL } from 'url'
```

</CodeGroupItem>

<CodeGroupItem title='CJS'>

```js
const url = require('url')
const { URL } = url
```

</CodeGroupItem>
</CodeGroup>

## 创建 URL 对象

```js
//指定域名
const baseUrl = 'http://127.0.0.1:3000'

//req 中的 url 可能长这样
const url = '/user?name=mo&age=12'

const myUrl = new URL(baseUrl, url)
```

现在就得到了`myUrl`这个 URL 对象，拥有一些有用的属性

```js
//端口号
myUrl.port
//协议
myUrl.protocol
//路径
myUrl.pathname
//...
```

其中有一个`searchParams`属性是对我们查询数据解析后生成的迭代对象

```js
const { searchParams } = myUrl

searchParams.get('name') // mo

searchParams.forEach((item, key) => {
    //do
})
```

也可以使用 [querystring 模块](./querystring.md) 来解析 url 参数

## 旧版 url

这是旧版本使用的一些内容

```js
// 和new URL()类似，会返回一个URL对象
url.parse('xxx/xxx')

//将URL对象转成url字符串
url.parse(myUrl)
```
