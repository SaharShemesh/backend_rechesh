import express from 'express';
import {json, urlencoded} from 'body-parser';
import logger from 'morgan';
import {initRoutes} from './routes/init';
import cors from 'cors';
import sequelize from "./models/init";
import load_associations from "./config/associations";
const app = express();


//logger
app.use(logger("combined"));

//cors
app.use(cors({
    optionsSuccessStatus:200,
}))

//express bp
app.use(json()) // for parsing application/json
app.use(urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

initRoutes(app);
 
// sync db
sequelize.sync({alter:true})


// load associations
load_associations();


 app.listen(3000,() => {
     console.log("app was started successfully");
 })
