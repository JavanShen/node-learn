import crypto from 'crypto'

const hash = crypto.createHash('md5')

hash.update('hello world')
hash.update('more')

console.log(hash.digest('hex'))
