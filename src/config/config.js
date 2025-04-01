import {config} from 'dotenv'
import env from 'env-var'

config()

export const port = env.get('PORT').asString()
export const publicPath = env.get('PUBLIC_PATH').asString()