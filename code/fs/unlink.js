import fs from 'fs'

fs.unlink('./demo/a.txt', err => {
    console.log(err)
})
