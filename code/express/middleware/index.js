import express from 'express'
import router from './router.js'

const app = express()

app.use((req, res, next) => {
    console.log('before all')

    next()
})

app.use('/', router)

app.get('/home', (req, res) => {
    res.send('home')
})

app.listen(3000, () => {
    console.log('server start')
})
