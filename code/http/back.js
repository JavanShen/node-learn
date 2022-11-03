import http from 'http'

const server = http.createServer((req, res) => {
    const { url } = req

    if (!url) return

    if (/\.ico$/.test(url)) {
        console.log('i have no icon')
        return
    }

    console.log(url)

    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    res.write('<b>你好</b>')
    res.end()
})

server.listen(3000, () => {
    console.log('server start')
})
