import * as url from 'url'
import path from 'path'

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const dirname = path.join(__dirname, '../')
export default {
  paths: {
    dirname, views: path.join(dirname, 'views')
  }
}