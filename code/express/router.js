import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('this is express')
})

app.get('/ab?cd', (req, res) => {
    res.send('/abcd|/acd')
})

app.get('/ab/:id', (req, res) => {
    res.send('/ab/xx')
})

app.get('/ab+cd', (req, res) => {
    res.send('/abbbbbcd')
})

app.get('/ab*cd', (req, res) => {
    res.send('/abfkesuhcd')
})

app.get('/ab(cd)?e', (req, res) => {
    res.send('/abcde|/abe')
})

app.get(/api$/, (req, res) => {
    res.send('/xxapi')
})

app.get(
    '/home',
    (req, res, next) => {
        const isValid = true
        if (isValid) {
            next()
        } else {
            res.send('fail')
        }
    },
    (req, res) => {
        res.send({ result: [] })
    }
)

const check = (req, res, next) => {
    const isValid = true
    if (isValid) {
        next()
    } else {
        res.send('fail')
    }
}

const back = (req, res) => {
    res.send({ result: [] })
}

app.get('/list', [check, back])

app.listen(3000, () => {
    console.log('server start')
})
