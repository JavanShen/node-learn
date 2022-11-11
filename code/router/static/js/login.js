console.log('login page')

const username = document.querySelector('.username')
const password = document.querySelector('.password')

document.querySelector('.login_btn').addEventListener('click', () => {
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
})
