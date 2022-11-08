import fs from 'fs'

const ws = fs.createWriteStream('./demo/a.txt', 'utf-8')

for (let i = 0; i < 10; i++) {
    ws.write(`this is ${i + 1} \n`)
}

ws.end()
