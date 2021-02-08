"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var init_1 = require("./routes/init");
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
//logger
app.use(morgan_1.default("combined"));
//cors
app.use(cors_1.default({
    optionsSuccessStatus: 200,
}));
//body_parser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
init_1.initRoutes(app);
app.listen(3000, function () {
    console.log("app was started successfully");
});
