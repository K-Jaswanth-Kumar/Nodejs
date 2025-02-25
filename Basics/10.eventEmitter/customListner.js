const { log } = require('console');
const event = require('events')

class MyCustomEmitter extends event{
    constructor(){
        super()
        this.greeting = 'Hello'
    }

    greet(name){
        this.emit('greeting',`${this.greeting},${name}`)
    }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on('greeting',(input)=>{
    log('Greeting Input',input)
})

myCustomEmitter.greet("Js")