import fs from 'fs'

fs.appendFile('./demo/a.txt', '\nhello world', err => {
    console.log(err)
})
