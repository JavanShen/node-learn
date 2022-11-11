import mime from 'mime'
import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

const base = path.join(__dirname, './static')

const render = (path, res) => {
    if (typeof path !== 'string') return apiParse(path, res)

    const extension = path.split('.')[1]
    const completePath = `${base}${path}`

    const isExist = fs.existsSync(completePath)

    res.writeHead(isExist ? 200 : 400, {
        'Content-Type': `${
            extension ? mime.getType(extension) : 'text/html'
        };charset=utf-8`
    })

    res.end(fs.readFileSync(isExist ? completePath : `${base}/404.html`))
}

const apiParse = (back, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8'
    })
    res.end(JSON.stringify(back))
}

export default render
