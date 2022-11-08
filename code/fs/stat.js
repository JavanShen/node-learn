import fs from 'fs'

fs.stat('./demo', (err, data) => {
    if (!err) {
        console.log(data.isDirectory())
    }
})
