# crypto 模块

对内容进行加密

## 引入

<CodeGroup>
<CodeGroupItem title='ESM'>

```js
import crypto from 'crypto'
```

</CodeGroupItem>

<CodeGroupItem title='CJS'>

```js
const crypto = require('crypto')
```

</CodeGroupItem>
</CodeGroup>

## md5

创建
@[code{3-3}](@/crypto/md5.js)

写入加密内容
@[code{5-6}](@/crypto/md5.js)

## sha1

@[code{3-6}](@/crypto/sha1.js)

## hamac

可以指定密匙
@[code{3-7}](@/crypto/hmac.js)

## aes

加密
@[code{3-6}](@/crypto/aes.js)

解密
@[code{8-13}](@/crypto/aes.js)
