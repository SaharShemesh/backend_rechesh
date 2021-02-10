"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const init_1 = require("./routes/init");
const cors_1 = __importDefault(require("cors"));
const init_2 = __importDefault(require("./models/init"));
const app = express_1.default();
//logger
app.use(morgan_1.default("combined"));
//cors
app.use(cors_1.default({
    optionsSuccessStatus: 200,
}));
//express bp
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
init_1.initRoutes(app);
//sync db
init_2.default.sync({ force: true });
app.listen(3000, () => {
    console.log("app was started successfully");
});
