import fs from 'fs'

fs.rmdir('./demo', err => {
    if (err?.code === 'ENOENT') {
        console.log('目录不存在')
    }
})
