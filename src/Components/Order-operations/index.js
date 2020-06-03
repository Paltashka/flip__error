import React, {useState, useRef} from 'react';
import BillRequest from "./bill-request";
import OrderHeader from "./order-header";
import OrderThanks from "./order-thanks";
import OrderFeedback from "./order-feedback";

const OrderOperations = props=>{
    const {goHome, info, orderState, billRequest, orderThanks, cart, orderFeedback, plusMinus} = props;
    return(
        <>
            {orderState<2&&<OrderHeader info={info} goHome={goHome} orderState={orderState}/>}
            {orderState===1&&<BillRequest billRequest={billRequest} cart={cart} plusMinus={plusMinus} />}
            {orderState===2&&<OrderFeedback orderFeedback={orderFeedback} total={cart.total}/>}
            {orderState===3&&<OrderThanks orderThanks={orderThanks}/>}

        </>
    )
}

export default OrderOperations
