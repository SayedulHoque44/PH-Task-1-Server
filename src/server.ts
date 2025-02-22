import mongoose from "mongoose";
import { app } from "./app"
import config from "./app/config";
const port = 4000


async function main() {
    try {
        await mongoose.connect(config.database_url as string);
  
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
    } catch (error) {
        console.log(error)
    }
  }

  main()