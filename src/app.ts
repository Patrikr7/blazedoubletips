import express from "express"
import cors from "cors"
import * as dotenv from "dotenv";
import { routes } from "./router"
import { Bot } from "./bot/CreateBot";
import { makeConnectionBlaze, DoubleUpdate } from '@viniciusgdr/Blaze'
import axios from "axios";

dotenv.config();

const bot = new Bot()
bot.inital()
bot.commandBot()
let socket: any

function connect(){
    socket = makeConnectionBlaze({
        needCloseWithCompletedSession: false,
        //token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM4NTk3NTUsImJsb2NrcyI6W10sImlhdCI6MTY1ODM3Mjk1MCwiZXhwIjoxNjYzNTU2OTUwfQ.SS6oU6byFJStAZfOAi0jf6RzebzPzBrUpq2WHjkUkUw',
        type: 'doubles',
        requireNotRepeated: true,
    })

    socket.ev.on('game_complete', async (msg) => {
        const { id, color, roll} = msg as DoubleUpdate
    
        const colorName = color === 0 ? "white" :  color === 1 ? "red" : "black"
        console.log({ id, colorName, roll })
        await axios.post("http://localhost:3000/colors", { colorName, number: roll })
    })
    
    socket.ev.on('close', (msg) => {
        console.log('Fechou a conexão - ' + JSON.stringify(msg))
        connect()
    })
}

connect()

// socket.ev.on('game_complete', async (msg) => {
//     const { id, color, roll} = msg as DoubleUpdate

//     const colorName = color === 0 ? "white" :  color === 1 ? "red" : "black"
//     console.log({ id, colorName, roll })
//     await axios.post("http://localhost:3000/colors", { colorName, number: roll })

//     setTimeout(() => {
//         socket.closeSocket()
//     }, 5000)
// })

// socket.ev.on('close', (msg) => {
//     console.log('Fechou a conexão - ' + JSON.stringify(msg))
//     socket = connect()
//     console.log(socket)
// })

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

export { app }