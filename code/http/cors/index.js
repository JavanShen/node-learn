import http from 'http'
import { URL } from 'url'

const server = http.createServer()

server.on('request', (req, res) => {
    const { pathname } = new URL(req.url, 'http://127.0.0.1:3000')

    if (pathname === '/api/a') {
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8',
            // 设置cors头，允许所有域访问
            'access-control-allow-origin': '*'
        })

        res.end(
            JSON.stringify({
                name: 'one',
                age: 12
            })
        )
    } else {
        res.end('not found')
    }
})

server.listen(3000)
