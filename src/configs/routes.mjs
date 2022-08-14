import { Router } from "express"
import { io } from "./app.mjs"

import configs from "./configs.mjs"

const {
  paths
} = configs

const routes = Router()
routes.get('/page', (req, res) => {
  return res.sendFile(
    paths.views + '/index.html'
  )
})

routes.use('', (req, res) => {
  const requestData = {
    path: req.originalUrl,
    method: req.method,
    body: req.body
  }
  io.emit('called', requestData)
  return res.json(requestData)
})

export default routes