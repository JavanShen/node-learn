# zlib 模块

压缩文件

## 引入

<CodeGroup>
<CodeGroupItem title='ESM'>

```js
import zlib from 'zlib'
```

</CodeGroupItem>

<CodeGroupItem title='CJS'>

```js
const zlib = require('zlib')
```

</CodeGroupItem>
</CodeGroup>

## gzip

当返回给浏览器的内容比较大的时候可以使用 gzip 压缩，同时指定响应头，让浏览器解压

创建 gzip 压缩
@[code{5-5}](@/zlib/index.js)

设置响应头，通过管道对文件进行压缩处理
@[code{9-13}](@/zlib/index.js)
