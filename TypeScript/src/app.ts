import express,{Express,Request,Response,NextFunction} from 'express'
import { IUser, User } from './model/User'

const app : Express= express()

app.use(express.json())

interface CustomRequest extends Request{
    startTime?: number
}

app.use((req : CustomRequest,res : Response,next : NextFunction)=>{
    req.startTime = Date.now()
    next()
})

app.get('/',(req : Request,res : Response)=>{
    res.send("Hello from typescript eexpress")
})

interface User {
    name: string,
    email : string
}

app.post('/user',(req : Request<{},{},User>,res : Response)=>{
    const {name,email} = req.body

    res.json({
        message:`User Created ${name}-${email}`
    })
})

app.get('/users',async(req:Request,res:Response)=>{
    try {
        const user : IUser[] = await User.find()
    } catch (e) {
        res.status(400).json({
            message:"Some error occured"
        })
    }
})

app.get('/user/:id',(req:Request<{id:string}>,res:Response)=>{
    const {id} = req.params

    res.json({
        userId:id,
        message:`User${id}`
    })
})

app.listen(4000,()=>{
    console.log(`Server is listening at ${4000}`)
})