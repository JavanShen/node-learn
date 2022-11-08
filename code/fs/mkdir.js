import fs from 'fs'

fs.mkdir('./demo', err => {
    if (err?.code === 'EEXIST') {
        console.log('目录已存在')
    }
})
