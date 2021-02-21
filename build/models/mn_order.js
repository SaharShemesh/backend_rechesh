"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MN_Order = void 0;
const sequelize_1 = require("sequelize");
const init_1 = __importDefault(require("./init"));
class MN_Order extends sequelize_1.Model {
}
exports.MN_Order = MN_Order;
MN_Order.init({
    id: { type: sequelize_1.INTEGER, primaryKey: true, autoIncrement: true },
    customer_id: { type: sequelize_1.INTEGER }
}, { sequelize: init_1.default, modelName: 'mn_order' });
//MN_Order.hasMany(Order);
//MN_Order.belongsTo(User, {foreignKey:'customer_id'});
