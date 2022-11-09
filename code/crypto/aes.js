import crypto from 'crypto'

const encrypt = (key, iv, data) => {
    const dep = crypto.createCipheriv('aes-128-cbc', key, iv)
    return dep.update(data, 'binary', 'hex') + dep.final('hex')
}

const decrypt = (key, iv, crypted) => {
    crypted = Buffer.from(crypted, 'hex').toString('binary')

    const dep = crypto.createDecipheriv('aes-128-cbc', key, iv)
    return dep.update(crypted, 'binary', 'utf8') + dep.final('utf8')
}

// 16*8 = 128
const key = 'abcdef1234567890'
const iv = 'fowkdo1234567890'

const data = 'hellow world'

const crypted = encrypt(key, iv, data)
console.log(crypted)

const decrypted = decrypt(key, iv, crypted)
console.log(decrypted)
