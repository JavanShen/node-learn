import querystring from 'querystring'

const str = 'name=one&age=18&location=china'

const myObj = {
    a: 1,
    b: 2,
    c: 3
}

const obj = querystring.parse(str)

const myStr = querystring.stringify(myObj)

console.log(obj)
console.log(myStr)
