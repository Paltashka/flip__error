import React, { useEffect} from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {connect} from "react-redux";
import MenuNavigator from "../Components/Menu-navigator";
import Products from "../Components/Products";
import CartForTable from '../Components/CartForTable';
import OrderOperations from '../Components/Order-operations';
import PageLoader from '../Components/PageLoader';
import {addFeedback, callBill, callWaiter, closeOrder, createOrder, updateOrder} from "../reducers/order";


const scrollTo = el=>{
    scroller.scrollTo(el, {
        duration: 1500,
        delay: 100,
        //smooth: true,
        smooth: "easeInOutQuint",
        spy: true,
        hashSpy: true,
        offset: -10, // Scrolls to element + 50 pixels down the page
    })
}

const Header = props =>{
    const { banner } = props.info;
    const style = banner ? { backgroundImage: `url(${banner})` } : {};

    useEffect(() => {
        window.addEventListener("scroll", checkScroll);

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    return(
        <header className="header" style={style}>
            <div className="container"></div>
        </header>
    )
}

function checkScroll(){
    let wPos = window.pageYOffset;
    let elPosTop = document.querySelector('.navigation').offsetTop;

    if ( wPos > elPosTop ) {
        document.querySelector('.navigation-fix').classList.add("fixed");
        document.querySelector('.tile-veiw--wrapper').classList.add("fixed");
    } else {
        document.querySelector('.navigation-fix').classList.remove("fixed");
    }
}

const MessageBlock = props =>{
    const {text} = props;
    return(
        <div className={`message-block ${text?'active':''}`}>
            {text}
        </div>
    )
}

const CartBlock = props =>{
    const {total} = props.cart;
    return(
        <div className={`cart-block ${total>0?'active':''}`}>
            <div className="row w-100 no-gutters align-items">
                <div className="col-auto txt">
                    Total: AED <span className="total">{total}</span>
                </div>
                <div className="col-auto ml-auto">
                    <button onClick={e=>props.openModalCart()} className="cl-btn s-x c-orange">View Cart</button>
                </div>
            </div>
        </div>
    )
}

class MenuPage extends React.Component{
    constructor() {
        super();
        this.state={
            tile:true,
            tiles:{},
            messageText:undefined,
            table_id:global.table||76,
            cart:{products:{},total:0},
            modalCartForTableIsOpen: false,
            orderMenu:false,
            orderState:0,
            orderClosed:true,
        }
        this.sectionsWrapperRef = React.createRef();
        
    }

    callWaitress = () =>{
        console.log('sent')
        this.showMessage('Call has been sent');
        if(this.state.table_id){
            this.props.CallWaiter(this.state.table_id);
        }
    }

    tileSwitcher = (tile,id=undefined)=>{
        if(id){
            let tiles = {...this.state.tiles};
            let old_state=tiles[id]||tile;
            tiles[id]=!old_state;
            this.setState({tiles});
        }else{
            this.setState({tile:!this.state.tile});
        }

        return true;
    }

    handleAnimation = () => {
        this.setState({ animation: "fade-in" });
        setTimeout(() => {
          this.setState({ animation: "" });
        }, 1000);
    }

    showMessage = (messageText,timeout=3000) => {
        this.setState({messageText});
        setTimeout(()=>this.setState({messageText:undefined}),timeout);
    }

    plusMinus = (id,a,price,name) =>{
        const {products, total} = this.state.cart;
        if(!products[id]){
            products[id]={
                id,
                count:0,
                price,
                currency:'AED',
                name,

            }
        }
        const cart = {products,total}
        let quantity = products[id].count + a;
        cart.total +=quantity>-1?a*price:0;
        cart.products[id].count = quantity>-1?quantity:0;
            //delete position
        if(a===0){
            cart.total-=cart.products[id].count*cart.products[id].price;
            cart.products[id].count=0;
        }
        this.setState({cart});
    }

    openModalCart = ()=>{
        if(this.state.orderClosed===true){
            this.props.CloseOrder();
        }
        this.setState({modalCartForTableIsOpen:true,orderClosed:false});
    }

    closeModalCart = (save=false, note=undefined)=>{
        const {cart, table_id} = this.state;
        const {order} = this.props.order;

        let products = Object.values(cart.products)
        this.setState({modalCartForTableIsOpen:false});

        if(save===true){
            this.setState({orderMenu:true,orderState:1});
            const {cart, table_id} = this.state;
            let products = Object.values(cart.products).map(({id,count:quantity})=>({product_id:parseInt(id),quantity})).filter(f=>f.quantity>0);
            if(order){
                this.props.UpdateOrder(order.uuid,{products,table_id,note})
            }else{
                this.props.CreateOrder({products, table_id})
            }
        }
    }

    goHome = ()=>{
        let res =  {orderMenu:false};
        if (this.state.orderState === 1) {
            res.cart = {products:{},total:0};
        } else if(this.state.orderState>1) {
            res.orderState=0;
            res.cart = {products:{},total:0};
        }
        this.setState(res);
    }
    billRequest = () =>{
        this.setState({orderState:2,orderClosed:true});
        this.showMessage('Request has been sent');
        if(this.props.order.uuid){
            this.props.CallBill(this.props.order.uuid,this.props.order.table_id)
        }
    }

    orderFeedback = (feedback=undefined) =>{
        if(feedback&&this.props.order.uuid){
            console.log(feedback);
            this.props.AddFeedback(this.props.order.uuid,feedback)
        }
        this.setState({orderState:3});
    }
    orderThanks = () =>{
        this.setState({orderState:0,cart:{products:{},total:0},orderMenu:false,});
    }

    componentDidMount(){
        Events.scrollEvent.register('begin', function(to, element) {
            
        });

        Events.scrollEvent.register('end', function(to, element) {
            
        });

        scrollSpy.update();
        scrollSpy.addStateHandler(activeItem=>{
            console.log(activeItem);
        })

        const {match} = this.props;
        let category = match.params.category||0;
        setTimeout(()=>{
            scroller.scrollTo(`#${category}`, {
                duration: 1500,
                delay: 100,
                //smooth: true,
                smooth: "easeInOutQuint",
                offset: -10, // Scrolls to element + 50 pixels down the page
            })
        },300)
    }

    render(){
        const {match, products, categories, info, tables } = this.props;
        let lang = match.params.lang || 'en';

        const {
            tile,
            tiles,
            messageText,
            cart,
            modalCartForTableIsOpen,
            orderState,
            order,
            orderMenu
        } = this.state;

        return(
            <>
                <div className={`wrapper fade-in ${modalCartForTableIsOpen===true?'modal-open':''}`}>

                    {orderMenu===false
                        ?<>
                            <Header info={info}/>
                            <MenuNavigator
                                handleAnimation={this.handleAnimation}
                                callWaitress={this.callWaitress}
                                sectionsWrapperRef={this.sectionsWrapperRef}
                                tileSwitcher={this.tileSwitcher}
                                tile={tile} categories={categories} lang={lang} info={info} />

                            <Products
                                sectionsWrapperRef={this.sectionsWrapperRef}
                                tile={tile}
                                tiles={tiles}
                                cart={cart}
                                info={info}
                                products={products}
                                categories={categories}
                                tables={tables}
                                tileSwitcher={this.tileSwitcher}
                                plusMinus={this.plusMinus}
                                lang={lang}/>
                            <CartBlock cart={cart} openModalCart={this.openModalCart}/>
                         </>
                        :<>
                            <OrderOperations
                                info={info}
                                orderState={orderState}
                                billRequest={this.billRequest}
                                orderThanks={this.orderThanks}
                                orderFeedback={this.orderFeedback}
                                cart={cart}
                                plusMinus={this.plusMinus}
                                goHome={this.goHome}
                                callWaitress={this.callWaitress}
                                order={this.props.order}
                                lang={lang}
                            />
                                
                         </>
                    }

                </div>

                <MessageBlock text={messageText}/>



                <CartForTable
                    isOpen={modalCartForTableIsOpen}
                    closeModalCart={this.closeModalCart}
                    plusMinus={this.plusMinus}
                    orderState={orderState}
                    cart={cart}/>

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        info:state.info||{},
        products:state.products||[],
        categories:state.categories||[],
        tables:state.tables||[],
        order:state.order||{},
    }
};

const mapMethodsToProps = {
    CallWaiter: callWaiter,
    CloseOrder: closeOrder,
    CreateOrder: createOrder,
    CallBill: callBill,
    UpdateOrder: updateOrder
};

export default connect(mapStateToProps, mapMethodsToProps)(MenuPage);
