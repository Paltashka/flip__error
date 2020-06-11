import React from 'react';
import {connect} from 'react-redux';
const BillRequest = props=>{
    const {billRequest, cart, plusMinus, order, currency, lang} = props;
    const products = order.products ? order.products : cart.products;
    // let productsVisible = Object.values({...products}).filter(f=>f.count>0);
    let productsVisible = Object.values({...products});
    let total = order.products ? order.grand_total : cart.total;
    if (order.products) {
        productsVisible = productsVisible.map(product => {
            return ({
            name: product.product[0].name[lang],
            price: product.order_price
        })})
    }

    return(
        <main className="bill-section">
            <div className="container">
                <div className="ticket-box">
                    <div className="ticket-section top-img">
                        <div className="title">
                            Churrasco
                        </div>
                        <address className="address">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
                                 className="svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x">
                                <path fill="currentColor"
                                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                      className=""></path>
                            </svg>
                            856 Esta Underpass
                        </address>
                        <div className="cart-list">
                            {
                                productsVisible.map(({id, name, price})=>{
                                    return(
                                        <div key={id} className="row no-gutters align-items-center">
                                            <div className="col prod-name">
                                                {name}
                                            </div>
                                            <div className="col-3 prod-price">
                                                <span className="price">{price}</span> {currency}
                                            </div>
                                            <div className="col-auto d-none">
                                                <button onClick={e=>plusMinus(id,0,price,name)} href="#" className="btn btn-link prod-delete"></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="ticket-section separator">
                        <div className="inner"></div>
                    </div>
                    <div className="ticket-section total">
                        <div className="row no-gutters align-items-center">
                            <div className="col total-txt">
                                TOTAL
                            </div>
                            <div className="col-auto total-num">
                                <span className="total-price">{total}</span> AED
                            </div>
                        </div>
                    </div>
                    <div className="ticket-section controls">
                        <button onClick={e=>billRequest()} type="button" className="cl-btn c-orange">Bill request</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = state => ({
    currency: state.info.currency
});

export default connect(mapStateToProps, null)(BillRequest);
