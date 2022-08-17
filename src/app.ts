import express from "express"
import cors from "cors"
import * as dotenv from "dotenv";
import { routes } from "./router"
import { Bot } from "./bot/CreateBot";
import { makeConnectionBlaze, DoubleUpdate } from '@viniciusgdr/blaze'
import axios from "axios";

dotenv.config();

const bot = new Bot()
bot.inital()
bot.commandBot()
let socket: any

function connect(){
    socket = makeConnectionBlaze({
        needCloseWithCompletedSession: false,
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

//connect()

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

export { app }