import http from 'http'
import fs from 'fs'
import zlib from 'zlib'

const gzip = zlib.createGzip()

const server = http.createServer()

server.on('request', (req, res) => {
    const rs = fs.createReadStream('./a.js')
    res.writeHead(200, {
        'Content-Type': 'application/x-javascript;charset=utf-8',
        'Content-Encoding': 'gzip'
    })
    rs.pipe(gzip).pipe(res)
})

server.listen(3000)
