import querystring from 'querystring'
import { URL } from 'url'

const getParameter = req => {
    return new Promise(resolve => {
        const { search } = new URL(req.url, 'http://127.0.0.1:3000')

        if (req.method === 'GET') {
            resolve(querystring.parse(search?.slice(1)))
        } else {
            let data = ''
            req.on('data', chunk => {
                data += chunk
            })

            req.on('end', () => {
                resolve(JSON.parse(data))
            })
        }
    })
}

export default getParameter
