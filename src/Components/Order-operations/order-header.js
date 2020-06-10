import React from "react";

const OrderHeader = props=>{
    const {info,goHome,orderState, callWaitress} = props;
    return(
        <section className="navigation">
            <div className="navigation-fix">
                <div className="container">
                    <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                            <button type={'button'} onClick={e=>goHome()} className="btn btn-link nav-link">
                                <img src="./assets/images/back.svg" alt="Back" />
                                {orderState==1?'Add order':'Home Page'}
                            </button>
                        </div>
                        <div className={`col-auto ml-auto ${info.call_a_waiter!==true?'d-none':''}`}>
                            <button onClick={() => callWaitress()} href="#" className="clt-btn s-m c-orange call-btn">call a waiter</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OrderHeader;
