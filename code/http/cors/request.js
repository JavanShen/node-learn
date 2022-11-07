import http from 'http'
import https from 'https'
import { URL } from 'url'

const request = cb => {
    const options = {
        hostname: 'api.juejin.cn',
        port: '443',
        path: '/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=&spider=0',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const req = https.request(options, res => {
        let data = ''
        res.on('data', chunk => {
            data += chunk
        })
        res.on('end', () => {
            cb(data)
        })
    })

    // POST数据在这里传入
    req.write(
        JSON.stringify({
            id_type: 2,
            client_type: 2608,
            sort_type: 200,
            cursor: '0',
            limit: 20
        })
    )
    req.end()
}

const server = http.createServer()

server.on('request', (req, res) => {
    const { pathname } = new URL(req.url, 'http://127.0.0.1:3000')

    if (pathname === '/api/juejin') {
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8',
            // 设置cors头，允许所有域访问
            'access-control-allow-origin': '*'
        })

        request(data => {
            res.end(data)
        })
    } else {
        res.end('not found')
    }
})

server.listen(3000)
