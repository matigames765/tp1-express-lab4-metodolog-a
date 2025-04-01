import {port, publicPath} from './config/config.js'
import { startServer } from './server/server.js'

const main = () => {
    startServer(port, publicPath)
}

(async() => {
    main()
})()