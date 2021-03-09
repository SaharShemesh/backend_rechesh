"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const morgan_1 = __importDefault(require("morgan"));
const init_1 = require("./routes/init");
const cors_1 = __importDefault(require("cors"));
const init_2 = __importDefault(require("./models/init"));
const associations_1 = __importDefault(require("./config/associations"));
const app = express_1.default();
//logger
app.use(morgan_1.default("combined"));
//cors
app.use(cors_1.default({
    optionsSuccessStatus: 200,
}));
//express bp
app.use(body_parser_1.json()); // for parsing application/json
app.use(body_parser_1.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
init_1.initRoutes(app);
// sync db
init_2.default.sync({ force: true });
// load associations
associations_1.default();
app.listen(3000, () => {
    console.log("app was started successfully");
});
