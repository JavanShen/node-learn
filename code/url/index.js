import url, { URL } from 'url'

const baseUrl = 'http://127.0.0.1:3000'

export default function tryUrl(path = '/home?a=12&b=5') {
    const myUrl = new URL(path, baseUrl)

    console.log(url.parse(path, true))
    console.log(myUrl)

    console.log(myUrl.searchParams.get('a'))

    console.log(url.format(myUrl))

    myUrl.searchParams.forEach((item, key) => {
        console.log(item, key)
    })
}

tryUrl()
