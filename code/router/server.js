import http from 'http'
import { URL } from 'url'
import render from './utils/render.js'
import getParameter from './utils/parameters.js'

export default class Server {
    constructor() {
        this.server = http.createServer()
        this.server.on('request', async (req, res) => {
            const { pathname } = new URL(req.url, 'http://127.0.0.1:3000')
            const parameters = await getParameter(req)

            console.log(parameters)

            const path =
                this.api[pathname]?.(parameters) || this.routes[pathname]

            render(path || pathname, res)
        })

        this.routes = {}
        this.api = {}
    }

    start() {
        this.server.listen(3000)
    }

    addRoute(routes) {
        this.routes = {
            ...this.routes,
            ...routes
        }
    }

    addApi(api) {
        this.api = {
            ...this.api,
            ...api
        }
    }
}
