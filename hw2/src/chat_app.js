import EventEmitter from 'node:events'

const emitter = new EventEmitter()

emitter.on('message', ({ user, message }) => {
    console.log(`${user}: ${message}`);
})

const sendMessage = (user, message) => {
    emitter.emit('message', { user, message })
}

export default sendMessage