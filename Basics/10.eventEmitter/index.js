const { log } = require('console');
const event = require('events')

const myFirstEmitter = new event();

myFirstEmitter.on('greet',(name)=>{
    log(`Hello ${name}`)
})

myFirstEmitter.emit('greet', 'Jaswanth')