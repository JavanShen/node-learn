import http from 'http'
import https from 'https'
import { URL } from 'url'
import * as cheerio from 'cheerio'

const spider = cb => {
    https.get('https://www.w2solo.com/', res => {
        let data = ''
        res.on('data', chunk => {
            data += chunk
        })
        res.on('end', () => {
            // 解析html文本
            const $ = cheerio.load(data)

            // 就像操作jquery一样
            const topicList = $('.topic')

            const topics = []

            // 遍历dom，获取其中的文本并处理
            topicList.each((index, val) => {
                topics.push(
                    $(val).find('.title').text().trim().replace(/\s+/, ': ')
                )
            })

            cb(JSON.stringify(topics))
        })
    })
}

const server = http.createServer()

server.on('request', (req, res) => {
    const { pathname } = new URL(req.url, 'http://127.0.0.1:3000')

    if (pathname === '/api/damai') {
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8',
            // 设置cors头，允许所有域访问
            'access-control-allow-origin': '*'
        })

        spider(data => {
            res.end(data)
        })
    } else {
        res.end('not found')
    }
})

server.listen(3000)
