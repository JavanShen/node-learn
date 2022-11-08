import { promises } from 'fs'

const deleteDeepDir = async (dir = './demo') => {
    const data = await promises.readdir(dir)

    for (const file of data) {
        const path = `${dir}/${file}`

        if ((await promises.stat(path)).isDirectory()) {
            await deleteDir(path)
        } else {
            await promises.unlink(path)
        }
    }

    await promises.rmdir(dir)
}

deleteDeepDir()
