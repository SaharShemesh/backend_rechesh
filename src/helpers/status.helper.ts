import {Order} from '../models/order';



export const validate_status = (id:number ) => {   //id = sub order id
    return Order.findOne({where:{
       id
    },
    attributes:["status"]
}).then( (order:any) => order.status).catch(() => false);
    
}
    