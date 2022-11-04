import http from 'http'

const server = http.createServer((req, res) => {
    const { url } = req

    res.write(renderHtml(url))

    res.end()
})

server.listen(3000, () => {
    console.log('server start')
})

const container = content => `<div>${content}</div>`

const urlCollect = {
    '/home': container('this is home'),
    '/page': container('this is page'),
    '/api/list': '[1,2,3]'
}

const renderHtml = url => {
    return urlCollect[url] || container('not found')
}
