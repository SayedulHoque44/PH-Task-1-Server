import express, { Application, Request, Response } from "express"
import cors from "cors"
import { UserRoutes } from "./app/modules/User/user.routes";
import globalErrorHandler from "./app/middleware/globalError";



export const app:Application = express()


// parser
app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

app.use("/api/user",UserRoutes)






app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)