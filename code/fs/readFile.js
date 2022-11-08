import fs from 'fs'

fs.readFile('./demo/a.txt', 'utf-8', (err, data) => {
    if (!err) {
        console.log(data)
    }
})
