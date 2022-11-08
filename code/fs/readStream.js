import fs from 'fs'

const rs = fs.createReadStream('./demo/a.txt', 'utf-8')

rs.on('data', chunk => {
    console.log(chunk)
})

rs.on('end', () => {
    console.log('end')
})

rs.on('error', err => {
    console.log('error:' + err)
})
