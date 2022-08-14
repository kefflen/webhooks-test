import express from 'express'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

import routes from './routes.mjs'
import configs from './configs.mjs'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.get('', (req, res) => {
  return res.sendFile(configs.paths.dirname + '/views/index.html')
})


const server = http.createServer(app)
export const io = new Server(server)

io.on('connection', (socket) => {
  console.log(socket)
  console.log('Connected')
})

export default server