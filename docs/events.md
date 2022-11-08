# events 模块

## 引入

<CodeGroup>
<CodeGroupItem title='ESM'>

```js
import { EventEmitter } from 'events'
```

</CodeGroupItem>

<CodeGroupItem title='CJS'>

```js
const { EventEmitter } = require('events')
```

</CodeGroupItem>
</CodeGroup>

## 监听和触发

用于创建事件监听和触发

创建一个事件实例
@[code{3-3}](@/event/index.js)

对 `put` 事件进行监听
@[code{5-7}](@/event/index.js)

触发 `put` 事件
@[code{9-9}](@/event/index.js)

适用于某些异步场景
@[code{11-13}](@/event/index.js)
