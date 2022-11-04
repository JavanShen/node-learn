import querystring from 'querystring'

const str = 'name=one&age=18&location=china'

const cstr = 'id=2&city=北京&url=https://www.app.com'

const myObj = {
    a: 1,
    b: 2,
    c: 3
}

// { name: 'one', age: '18, location: 'china'}
const obj = querystring.parse(str)

// a=1&b=2&c=3
const myStr = querystring.stringify(myObj)

// 编码和解码，可以防止某些注入
const escaped = querystring.escape(cstr)
const unescaped = querystring.unescape(escaped)

console.log(obj)
console.log(myStr)
console.log(escaped)
console.log(unescaped)
