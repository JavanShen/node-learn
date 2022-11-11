import Server from './server.js'
import routes from './router.js'
import api from './api.js'

const app = new Server()

app.addRoute(routes)

app.addApi(api)

app.start()
