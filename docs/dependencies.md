# 工具库

## [cheerio](https://github.com/cheeriojs/cheerio)

对 html 文本进行解析，用类似 jquery 的方式获取 dom

```js
import * as cheerio from 'cheerio'

// 传入html文本
const $ = cheerio.load(html)

// 获取所有class为list的dom
const list = $('.list')

// 遍历dom
list.each((index, val) => {
    // 找到class为title的后代，获取文本
    $(val).find('.title').text()
})
```

## [mime](https://github.com/broofa/mime)

根据文件后缀判断 MIME 类型

```js
import mime from 'mime'

mime.getType('txt') // 'text/plain'
mime.getExtension('text/plain') // 'txt'
```
