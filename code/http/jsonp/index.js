import http from 'http'
import { URL } from 'url'

const jsonp = fnName => {
    const data = {
        name: 'mo',
        age: 12
    }

    // 将函数名和数据拼合成执行字符串返回
    return `${fnName}(${JSON.stringify(data)})`
}

const server = http.createServer()

server.on('request', (req, res) => {
    const { url } = req

    const { pathname, searchParams } = new URL(url, 'http://127.0.0.1:3000')

    const fnName = searchParams.get('fn')

    if (pathname === '/api/aaa' && fnName) {
        // 当 url 路径是 /api/aaa 同时有fn参数的的时候返回JSON
        res.end(jsonp(fnName))
    } else {
        res.end('not found')
    }
})

server.listen('3000')
