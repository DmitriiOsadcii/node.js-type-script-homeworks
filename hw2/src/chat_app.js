import EventEmitter from 'node:events'

const emitter = new EventEmitter()

emitter.on('message', message => {
    console.log(message);
})

const sendMessage = (name, message) => {
    emitter.emit('message', `${name}: ${message}`)
}

export default sendMessage;