const getList = ({ len }) => {
    const arrLen = len ? parseInt(len) : 15

    return new Array(Math.min(15, arrLen)).fill('').map((item, index) => {
        return {
            id: index,
            type: 'test'
        }
    })
}

const login = ({ username, password }) => {
    if (username === 'admin' && password === '12345') {
        return {
            status: 'success',
            role: 'admin'
        }
    }
    return {
        status: 'fail'
    }
}

export default {
    '/api/getList': getList,
    '/api/login': login
}
