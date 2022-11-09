import crypto from 'crypto'

const hash = crypto.createHash('sha1')

hash.update('hello world')
hash.update('more')

console.log(hash.digest('hex'))
