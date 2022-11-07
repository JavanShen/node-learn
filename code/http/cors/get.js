import http from 'http'
import https from 'https'
import { URL } from 'url'

const get = cb => {
    https.get(
        // 猫眼网站上的一个api接口
        'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=杭州&ci=50&channelId=4',
        res => {
            let data = ''
            // 监听data事件，把数据流合并到最终的数据中
            res.on('data', chunk => {
                data += chunk
            })
            // 在结束的时候调用传进来的回调函数，将最终数据传递出去
            res.on('end', () => {
                cb(data)
            })
        }
    )
}

const server = http.createServer()

server.on('request', (req, res) => {
    const { pathname } = new URL(req.url, 'http://127.0.0.1:3000')

    if (pathname === '/api/maoyan') {
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8',
            // 设置cors头，允许所有域访问
            'access-control-allow-origin': '*'
        })

        get(data => {
            res.end(data)
        })
    } else {
        res.end('not found')
    }
})

server.listen(3000)
