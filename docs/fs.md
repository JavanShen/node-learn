# fs 模块

fs 模块可以对文件进行操作

## 引入

<CodeGroup>
<CodeGroupItem title='ESM'>

```js
import fs from 'fs'
```

</CodeGroupItem>

<CodeGroupItem title='CJS'>

```js
const fs = require('fs')
```

</CodeGroupItem>
</CodeGroup>

## 文件夹

### 创建文件夹

在当前目录下创建一个 demo 文件夹，如果错误值为 `EEXIST` 则说明文件夹已存在
@[code{3-7}](@/fs/mkdir.js)

### 删除文件夹

删除当前目录下的 demo 文件夹
@[code{3-7}](@/fs/rmdir.js)

### 文件夹重命名

重命名当前目录下的 demo 文件夹为 demoo
@[code{3-7}](@/fs/rename.js)

### 获取文件夹内容

获取文件夹中的文件名，返回一个数组
@[code{3-7}](@/fs/readdir.js)

## 文件

### 创建文件

在 demo 文件夹下创建一个名为 a 的 txt 文件，并写入内容 `hello world`
@[code{3-5}](@/fs/writeFile.js)

### 追加内容

在文件中新增内容
@[code{3-5}](@/fs/appendFile.js)

### 删除文件

删除 demo 文件夹中的 a.txt
@[code{3-5}](@/fs/unlink.js)

## 同步和异步

以上操作都是异步操作，如果需要同步的话可以尝试方法名加上 `Sync`

```js
fs.writeFileSync()
fs.mkdirSync()
// ...
```

::: warning 阻塞
同步会阻塞服务器进程，不建议使用
:::

### promises

现在异步都是回调函数的方式，可以使用 fs 模块提供的 `promises` 来进行 promise 异步操作

```js
import { promises } from 'fs'

promises
    .readdir('./demo')
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
```

## 删除有文件的文件夹

当文件夹中有文件的时候是无法使用 `rmdir` 删除文件夹的，现在来写一个函数实现

@[code{3-8}](@/fs/deleteDir.js)

再升级一下，用 `stat` 方法判断是否是文件夹，实现深层文件夹删除
@[code{3-17}](@/fs/deleteDeepDir.js)

## 流

如果对很大的文件直接进行读写的话可能会有性能上的问题，这个时候就可以使用文件流分段式读写（就像水流一样）

### 读取流

创建
@[code{3-3}](@/fs/readStream.js)

读取
@[code{5-11}](@/fs/readStream.js)

### 写入流

创建
@[code{3-3}](@/fs/writeStream.js)

写入
@[code{5-9}](@/fs/writeStream.js)

### 管道

如果想复制一个文件，那么可以通过管道，让数据从读取流流向写入流

@[code{3-5}](@/fs/pipe.js)
