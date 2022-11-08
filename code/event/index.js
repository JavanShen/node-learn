import { EventEmitter } from 'events'

const event = new EventEmitter()

event.on('put', (data = '') => {
    console.log(data)
})

event.emit('put', 'do')

setTimeout(() => {
    event.emit('put', 'did')
}, 1000)
