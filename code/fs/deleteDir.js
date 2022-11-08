import { promises } from 'fs'

const deleteDir = (dir = './demo') => {
    promises.readdir(dir).then(async data => {
        await Promise.all(data.map(item => promises.unlink(`${dir}/${item}`)))
        await promises.rmdir(dir)
    })
}

deleteDir()
