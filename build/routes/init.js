"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const main_orders = __importStar(require("./MN_order.route"));
const sell_item = __importStar(require("./sell_item.route"));
function initRoutes(app) {
    app.get("/api", (request, response) => {
        response.end("welcome to the rechesh");
    });
    //model routing
    app.use("/api/Main-Orders", main_orders.plural_router);
    app.use("/api/Main-Order", main_orders.singular_router);
    app.use("/api/Main-Order/:order_id/order/:sub_id/sell-items", sell_item.plural_router);
    app.use("/api/Main-Order/:order_id/order/:sub_id/sell-items", sell_item.singular_router);
}
exports.initRoutes = initRoutes;
