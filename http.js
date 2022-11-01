import http from 'http'
import _url from 'url'

const server = http.createServer((req, res) => {
    const { url } = req
    
    if (/\.ico$/.test(url)) {
        console.log('i have no icon')
        return
    }
    console.log(url)
    console.log(_url.parse(url,true))

    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
    res.write('<b>你好</b>')
    res.end()
})

server.listen(3000, () => {
    console.log('server start')
})