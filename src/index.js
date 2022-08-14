import dotenv from 'dotenv'
dotenv.config()

import app from "./configs/app.mjs";
import configs from "./configs/configs.mjs";


app.listen(process.env.PORT || 3000, () => {
  console.log('Running at: ' + process.env.PORT || 3000)
})