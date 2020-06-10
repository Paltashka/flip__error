import React, {useState, useRef} from 'react';
import BillRequest from "./bill-request";
import OrderHeader from "./order-header";
import OrderThanks from "./order-thanks";
import OrderFeedback from "./order-feedback";

const OrderOperations = props=>{
    const {goHome, info, orderState, billRequest, orderThanks, cart, orderFeedback, plusMinus, callWaitress, order, lang} = props;
    return(
        <>
            {orderState<2&&<OrderHeader info={info} goHome={goHome} orderState={orderState} callWaitress={callWaitress}/>}
            {orderState===1&&<BillRequest lang={lang} order={order} billRequest={billRequest} cart={cart} plusMinus={plusMinus} />}
            {orderState===2&&<OrderFeedback orderFeedback={orderFeedback} total={cart.total} order={order} />}
            {orderState===3&&<OrderThanks orderThanks={orderThanks}/>}

        </>
    )
}

export default OrderOperations
