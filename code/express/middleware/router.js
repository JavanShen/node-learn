import express from 'express'

const router = express.Router()

router.get('/a', (req, res) => {
    res.send('a')
})

router.get('/b', (req, res) => {
    res.send('b')
})

export default router
