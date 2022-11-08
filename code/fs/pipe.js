import fs from 'fs'

fs.createReadStream('./demo/a.txt', 'utf-8').pipe(
    fs.createWriteStream('./demo/b.txt', 'utf-8')
)
