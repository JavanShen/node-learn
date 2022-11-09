import crypto from 'crypto'

const hash = crypto.createHmac('md5', 'mo')
// sha256

hash.update('hello world')
hash.update('more')

console.log(hash.digest('hex'))
