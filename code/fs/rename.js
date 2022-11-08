import fs from 'fs'

fs.rename('./demo', './demoo', err => {
    if (err?.code === 'ENOENT') {
        console.log('文件不存在')
    }
})
