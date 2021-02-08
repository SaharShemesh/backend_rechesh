import express from 'express';
import {initRoutes} from './routes/init';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

//logger
app.use(logger("combined"));

//cors
app.use(cors({
    optionsSuccessStatus:200,
}))

//body_parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

initRoutes(app);

 app.listen(3000,() => {
     console.log("app was started successfully");
 })
