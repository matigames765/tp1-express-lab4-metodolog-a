import path from 'path'
import express from 'express'
import {dirname} from 'path'
import { fileURLToPath } from 'url'


export const startServer = (port, publicPath) => {

    const __filename = fileURLToPath(import.meta.url)

    const __dirname = dirname(__filename)

    const app = express()

    app.use(express.static(publicPath))

    app.get('/hola', (req, res) => {
        const pathUrl = path.join(__dirname, '../../public/dist/index.html')
        res.sendFile(pathUrl)
    })

    app.listen(port, () => {
        console.log('Escuchando el puerto ' + port)
    })
}