import fs from 'fs'

fs.writeFile('./demo/a.txt', 'hello world', err => {
    console.log(err)
})
