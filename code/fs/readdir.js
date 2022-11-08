import fs from 'fs'

fs.readdir('./demo', (err, data) => {
    if (!err) {
        console.log(data)
    }
})
