(this.webpackJsonpMenu_frontend=this.webpackJsonpMenu_frontend||[]).push([[4],{779:function(e,t,a){"use strict";a.r(t),function(e){var n=a(20),r=a(789),c=a(790),s=a(795),l=a(796),o=a(0),i=a.n(o),m=a(784),u=a(212),d=a(809),p=a(806),v=a(807),f=a(808),E=(a(211),a(322)),g=function(e){var t=e.info.banner,a=t?{backgroundImage:"url(".concat(t,")")}:{};return Object(o.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[]),i.a.createElement("header",{className:"header",style:a},i.a.createElement("div",{className:"container"}))};function h(){window.pageYOffset>document.querySelector(".navigation").offsetTop?(document.querySelector(".navigation-fix").classList.add("fixed"),document.querySelector(".tile-veiw--wrapper").classList.add("fixed")):document.querySelector(".navigation-fix").classList.remove("fixed")}var b=function(e){var t=e.text;return i.a.createElement("div",{className:"message-block ".concat(t?"active":"")},t)},N=function(e){var t=e.cart.total;return i.a.createElement("div",{className:"cart-block ".concat(t>0?"active":"")},i.a.createElement("div",{className:"row w-100 no-gutters align-items"},i.a.createElement("div",{className:"col-auto txt"},"Total: AED ",i.a.createElement("span",{className:"total"},t)),i.a.createElement("div",{className:"col-auto ml-auto"},i.a.createElement("button",{onClick:function(t){return e.openModalCart()},className:"cl-btn s-x c-orange"},"View Cart"))))},k=function(t){Object(l.a)(o,t);var a=Object(s.a)(o);function o(){var t;return Object(r.a)(this,o),(t=a.call(this)).callWaitress=function(){console.log("sent"),t.showMessage("Call has been sent"),t.state.table_id&&t.props.CallWaiter(t.state.table_id)},t.tileSwitcher=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(a){var r=Object(n.a)({},t.state.tiles),c=r[a]||e;r[a]=!c,t.setState({tiles:r})}else t.setState({tile:!t.state.tile});return!0},t.handleAnimation=function(){t.setState({animation:"fade-in"}),setTimeout((function(){t.setState({animation:""})}),1e3)},t.showMessage=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;t.setState({messageText:e}),setTimeout((function(){return t.setState({messageText:void 0})}),a)},t.plusMinus=function(e,a,n,r){var c=t.state.cart,s=c.products,l=c.total;s[e]||(s[e]={id:e,count:0,price:n,currency:"AED",name:r});var o={products:s,total:l},i=s[e].count+a;o.total+=i>-1?a*n:0,o.products[e].count=i>-1?i:0,0===a&&(o.total-=o.products[e].count*o.products[e].price,o.products[e].count=0),t.setState({cart:o})},t.openModalCart=function(){!0===t.state.orderClosed&&t.props.CloseOrder(),t.setState({modalCartForTableIsOpen:!0,orderClosed:!1})},t.closeModalCart=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=t.state,r=n.cart;n.table_id,Object.values(r.products);if(t.setState({modalCartForTableIsOpen:!1}),!0===e){t.setState({orderMenu:!0,orderState:1});var c=t.state,s=c.cart,l=c.table_id,o=Object.values(s.products).map((function(e){var t=e.id,a=e.count;return{product_id:parseInt(t),quantity:a}})).filter((function(e){return e.quantity>0}));t.props.order.uuid?t.props.UpdateOrder(t.props.order.uuid,o,l,a):t.props.CreateOrder({products:o,table_id:l})}},t.goHome=function(){var e={orderMenu:!1};t.state.orderState>1&&(e.orderState=0,e.cart={products:{},total:0}),t.setState(e)},t.billRequest=function(){t.setState({orderState:2,orderClosed:!0}),t.showMessage("Request has been sent"),t.props.order.uuid&&t.props.CallBill(t.props.order.uuid,t.props.order.table_id)},t.orderFeedback=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;e&&t.props.order.uuid&&(console.log(e),t.props.AddFeedback(t.props.order.uuid,e)),t.setState({orderState:3})},t.orderThanks=function(){t.setState({orderState:0,cart:{products:{},total:0},orderMenu:!1})},t.state={tile:!0,tiles:{},messageText:void 0,table_id:e.table||14,cart:{products:{},total:0},modalCartForTableIsOpen:!1,orderMenu:!1,orderState:0,orderClosed:!0},t.sectionsWrapperRef=i.a.createRef(),t}return Object(c.a)(o,[{key:"componentDidMount",value:function(){m.Events.scrollEvent.register("begin",(function(e,t){})),m.Events.scrollEvent.register("end",(function(e,t){})),m.scrollSpy.update(),m.scrollSpy.addStateHandler((function(e){console.log(e)}));var e=this.props.match.params.category||0;setTimeout((function(){m.scroller.scrollTo("#".concat(e),{duration:1500,delay:100,smooth:"easeInOutQuint",offset:-10})}),300)}},{key:"render",value:function(){var e=this.props,t=e.match,a=e.products,n=e.categories,r=e.info,c=e.tables,s=t.params.lang||"en",l=this.state,o=l.tile,m=l.tiles,u=l.messageText,E=l.cart,h=l.modalCartForTableIsOpen,k=l.orderState,w=(l.order,l.orderMenu);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"wrapper fade-in ".concat(!0===h?"modal-open":"")},!1===w?i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{info:r}),i.a.createElement(d.a,{handleAnimation:this.handleAnimation,callWaitress:this.callWaitress,sectionsWrapperRef:this.sectionsWrapperRef,tileSwitcher:this.tileSwitcher,tile:o,categories:n,lang:s,info:r}),i.a.createElement(p.a,{sectionsWrapperRef:this.sectionsWrapperRef,tile:o,tiles:m,cart:E,info:r,products:a,categories:n,tables:c,tileSwitcher:this.tileSwitcher,plusMinus:this.plusMinus,lang:s}),i.a.createElement(N,{cart:E,openModalCart:this.openModalCart})):i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{info:r,orderState:k,billRequest:this.billRequest,orderThanks:this.orderThanks,orderFeedback:this.orderFeedback,cart:E,plusMinus:this.plusMinus,goHome:this.goHome}))),i.a.createElement(b,{text:u}),i.a.createElement(v.a,{isOpen:h,closeModalCart:this.closeModalCart,plusMinus:this.plusMinus,orderState:k,cart:E}))}}]),o}(i.a.Component),w={CallWaiter:E.b,CloseOrder:E.c,CreateOrder:E.d,CallBill:E.a};t.default=Object(u.b)((function(e){return{info:e.info||{},products:e.products||[],categories:e.categories||[],tables:e.tables||[],order:e.order||{}}}),w)(k)}.call(this,a(11))},805:function(e,t,a){e.exports=a.p+"static/media/dropdown-arrow.1794a143.svg"},806:function(e,t,a){"use strict";(function(e){var n=a(20),r=a(0),c=a.n(r),s=a(784);t.a=function(t){var a=t.products,l=t.categories,o=t.lang,i=t.tile,m=t.tiles,u=t.sectionsWrapperRef,d=t.cart,p=t.plusMinus,v=t.tables,f=(t.info,function(e){for(var t=0;t<l.length;t++)if(l[t].id===e)return t;return 0}),E=a.reduce((function(e,t){var a=t.categories;if(!a||!1===Array.isArray(a)||0===a.length)return e;var n=a[0],r=n.id,c=n.name;return e[r]||(e[r]={id:r,name:c[o],pr:[]}),e[r].pr.push(t),e}),{});E=(E=Object.values(E)).map((function(e){return Object(n.a)({},e,{sort_index:f(e.id)})})).sort((function(e,t){return e.sort_index-t.sort_index}));var g=e.table?e.table.toString():-1;Object(r.useMemo)((function(){return v.some((function(e){return e.id.toString()==g}))}),[v,g]);return c.a.createElement("main",{className:"menu-section tile-view-main"},c.a.createElement("div",{className:"container",ref:u},E.map((function(e){var a=e.id,n=e.name,r=e.pr;return c.a.createElement(s.Element,{key:a,className:"menu-category",id:"cat_".concat(a),name:"cat_".concat(a)},c.a.createElement("div",{className:"category-title"},n),c.a.createElement("div",{className:"category-list row"},r.map((function(e){var a=e.id,n=e.price,r=e.name,s=e.description,l=(e.count_in_cart,e.images),u=m[a]||i,v=Array.isArray(l)&&l.length>0?l[0]:"./assets/images/breakfast1.jpg";return c.a.createElement("div",{key:a,className:"col-md-6 col-lg-4"},c.a.createElement("div",{className:"menu-item ".concat(!1===u?"tile-view-list":"")},c.a.createElement("div",{className:"img"},c.a.createElement("img",{onClick:function(){return t.tileSwitcher(i,a)},src:v,alt:r[o]}),c.a.createElement("div",{className:"code"},"AED ",n)),c.a.createElement("div",{className:"row align-items-center no-gutters"},c.a.createElement("div",{className:"col info"},c.a.createElement("div",{className:"name"},r[o]||r.en),c.a.createElement("div",{className:"desc"},s[o]||s.en)),c.a.createElement("div",{className:"col-auto cc-col ml-auto"},c.a.createElement("div",{className:"cart-controls ".concat("")},c.a.createElement("button",{onDoubleClick:function(e){e.stopPropagation(),e.preventDefault()},className:"cl-btn c-orange ct-plus s-x",onClick:function(e){return p(a,1,n,r[o])}},"+"),c.a.createElement("div",{className:"item-count ".concat(d.products[a]&&d.products[a].count>0?"":"hidden")},d.products[a]?d.products[a].count:0),c.a.createElement("button",{onDoubleClick:function(e){e.stopPropagation(),e.preventDefault()},onClick:function(e){return p(a,-1,n,r[o])},className:"cl-btn c-orange ct-minus s-x ".concat(d.products[a]&&d.products[a].count>0?"":"hidden")},"-"))))))}))))}))))}}).call(this,a(11))},807:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.isOpen,a=e.closeModalCart,c=e.cart,s=e.plusMinus,l=e.orderState,o=Object.values(c.products).filter((function(e){return e.count>0}));!0===t&&0===o.length&&a();var i=Object(n.createRef)();return r.a.createElement("div",{className:"modal fade align-items-center ".concat(!0===t?"d-block show":""),id:"modal-cart2",onClick:function(e){return a()}},r.a.createElement("div",{className:"modal-dialog ticket-box",onClick:function(e){return e.stopPropagation()}},r.a.createElement("button",{onClick:function(e){return a()},className:"close"},r.a.createElement("img",{src:"./assets/images/close.svg",alt:"Close"})),r.a.createElement("div",{className:"ticket-section top-img"},r.a.createElement("div",{className:"title"},"Churrasco"),r.a.createElement("address",{className:"address"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"map-marker-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x"},r.a.createElement("path",{fill:"currentColor",d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",className:""})),"856 Esta Underpass"),r.a.createElement("div",{className:"cart-list"},o.map((function(e){var t=e.id,a=e.name,n=e.price,c=e.currency,l=e.count;return r.a.createElement("div",{key:t,className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col prod-name"},a),r.a.createElement("div",{className:"col-3 prod-price"},r.a.createElement("span",{className:"price"},n*l)," ",c),r.a.createElement("div",{className:"col-auto"},r.a.createElement("button",{onClick:function(e){return s(t,0,n,a)},href:"#",className:"btn btn-link prod-delete"})))})))),r.a.createElement("div",{className:"ticket-section separator"},r.a.createElement("div",{className:"inner"})),r.a.createElement("form",{method:"post",encType:"multipart/form-data",action:"#",ref:i},r.a.createElement("div",{className:"ticket-section"},r.a.createElement("div",{className:"form-block"},r.a.createElement("div",{className:"inputblock mb-3"},r.a.createElement("label",{htmlFor:"ct3"},"Add your note"),r.a.createElement("textarea",{id:"ct3",name:"note",placeholder:"Enter your note",className:"s-xl"})))),r.a.createElement("div",{className:"ticket-section separator"},r.a.createElement("div",{className:"inner"})),r.a.createElement("div",{className:"ticket-section total"},r.a.createElement("div",{className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col total-txt"},"TOTAL"),r.a.createElement("div",{className:"col-auto total-num"},r.a.createElement("span",{className:"total-price"},c.total)," AED"))),r.a.createElement("div",{className:"ticket-section controls"},r.a.createElement("button",{onClick:function(e){return a(!0,i.current.note.value)},type:"button",className:"cl-btn c-orange"},"".concat(0===l?"Checkout":"Update"))))))}},808:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=function(e){var t=e.billRequest,a=e.cart,n=e.plusMinus,c=Object.values(a.products).filter((function(e){return e.count>0}));return r.a.createElement("main",{className:"bill-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"ticket-box"},r.a.createElement("div",{className:"ticket-section top-img"},r.a.createElement("div",{className:"title"},"Churrasco"),r.a.createElement("address",{className:"address"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"map-marker-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"svg-inline--fa fa-map-marker-alt fa-w-12 fa-2x"},r.a.createElement("path",{fill:"currentColor",d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",className:""})),"856 Esta Underpass"),r.a.createElement("div",{className:"cart-list"},c.map((function(e){var t=e.id,a=e.name,c=e.price,s=e.currency,l=e.count;return r.a.createElement("div",{key:t,className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col prod-name"},a),r.a.createElement("div",{className:"col-3 prod-price"},r.a.createElement("span",{className:"price"},c*l)," ",s),r.a.createElement("div",{className:"col-auto d-none"},r.a.createElement("button",{onClick:function(e){return n(t,0,c,a)},href:"#",className:"btn btn-link prod-delete"})))})))),r.a.createElement("div",{className:"ticket-section separator"},r.a.createElement("div",{className:"inner"})),r.a.createElement("div",{className:"ticket-section total"},r.a.createElement("div",{className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col total-txt"},"TOTAL"),r.a.createElement("div",{className:"col-auto total-num"},r.a.createElement("span",{className:"total-price"},a.total)," AED"))),r.a.createElement("div",{className:"ticket-section controls"},r.a.createElement("button",{onClick:function(e){return t()},type:"button",className:"cl-btn c-orange"},"Bill request")))))},s=function(e){var t=e.info,a=e.goHome,n=e.orderState;return r.a.createElement("section",{className:"navigation"},r.a.createElement("div",{className:"navigation-fix"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("button",{type:"button",onClick:function(e){return a()},className:"btn btn-link nav-link"},r.a.createElement("img",{src:"./assets/images/back.svg",alt:"Back"}),1==n?"Add order":"Home Page")),r.a.createElement("div",{className:"col-auto ml-auto ".concat(!0!==t.call_a_waiter?"d-none":"")},r.a.createElement("button",{href:"#",className:"clt-btn s-m c-orange call-btn"},"call waitress"))))))},l=function(e){var t=e.orderThanks;return r.a.createElement("main",{className:"thanks-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"thanks-box"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:"./assets/images/ic_check.svg",alt:"Check"})),r.a.createElement("div",{className:"title"},"Thank you for your feedback"),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{onClick:function(e){return t()},className:" cl-btn c-orange"},"Continue Shopping")))))},o=function(e){var t=e.orderFeedback,a=e.total,c=Object(n.createRef)();return r.a.createElement("main",{className:"bill-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"ticket-box"},r.a.createElement("div",{className:"ticket-section top-img"},r.a.createElement("h4",null,"Order summary")),r.a.createElement("div",{className:"ticket-section total"},r.a.createElement("div",{className:"row no-gutters align-items-center"},r.a.createElement("div",{className:"col total-txt"},"TOTAL"),r.a.createElement("div",{className:"col-auto total-num"},r.a.createElement("span",{className:"total-price"},a||0)," AED"))),r.a.createElement("div",{className:"ticket-section separator"},r.a.createElement("div",{className:"inner"})),r.a.createElement("form",{method:"post",encType:"multipart/form-data",action:"#",ref:c},r.a.createElement("div",{className:"ticket-section"},r.a.createElement("div",{className:"form-block"},r.a.createElement("div",{className:"inputblock mb-3"},r.a.createElement("h4",{htmlFor:"ct3"},"Your feedback"),r.a.createElement("textarea",{id:"ct3",name:"note",placeholder:"Enter your note",className:"s-xl"})))),r.a.createElement("div",{className:"ticket-section separator"},r.a.createElement("div",{className:"inner"})),r.a.createElement("div",{className:"ticket-section controls"},r.a.createElement("button",{onClick:function(e){return t(c.current.note.value)},type:"button",className:"cl-btn c-orange"},"Submit"))))))};t.a=function(e){var t=e.goHome,a=e.info,n=e.orderState,i=e.billRequest,m=e.orderThanks,u=e.cart,d=e.orderFeedback,p=e.plusMinus;return r.a.createElement(r.a.Fragment,null,n<2&&r.a.createElement(s,{info:a,goHome:t,orderState:n}),1===n&&r.a.createElement(c,{billRequest:i,cart:u,plusMinus:p}),2===n&&r.a.createElement(o,{orderFeedback:d,total:u.total}),3===n&&r.a.createElement(l,{orderThanks:m}))}},809:function(e,t,a){"use strict";var n=a(69),r=a.n(n),c=a(116),s=a(213),l=a(0),o=a.n(l),i=a(253),m=a(95),u=a(789),d=a(791),p=a(790),v=a(795),f=a(796),E=a(85),g=a.n(E),h=a(804),b=a.n(h),N=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(a),a=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};var k=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind(Object(d.a)(n)),n}return Object(p.a)(a,null,[{key:"propTypes",get:function(){return{items:g.a.arrayOf(g.a.string).isRequired,currentClassName:g.a.string.isRequired,scrolledPastClassName:g.a.string,style:g.a.object,componentTag:g.a.oneOfType([g.a.string,g.a.element]),offset:g.a.number,rootEl:g.a.string,onUpdate:g.a.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),Object(p.a)(a,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,r=e.length;n<r;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],r=e||this.state.targetItems,c=!1,s=0,l=r.length;s<l;s++){var o=r[s],i=!c&&this._isInView(o);i?(c=!0,t.push(o)):a.push(o);var u=s===l-1,d=this._isScrolled();this._isAtBottom()&&this._isInView(o)&&!i&&u&&d&&(a.pop(),a.push.apply(a,Object(m.a)(t)),t=[o],n=this._fillArray(n,!1),i=!0),n.push(i)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,r=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var c=e.getBoundingClientRect(),s=n?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,o=l+s,i=n?c.top+l-t.top+r:c.top+l+r,m=i+e.offsetHeight;return i<o&&m>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){N(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=(this.props.componentTag,this.props),a=t.children,n=t.className,r=t.scrolledPastClassName,c=(t.style,0),s=this.state.inViewState||[],l=o.a.Children.map(a,(function(e,t){return e?{child:e.props.children.props.children,idx:t,inViewState:s[t]||!1}:null})).filter((function(e){return null!==e&&!0===e.inViewState})).reduce((function(e,t){return t}),{});o.a.Children.map(a,(function(t,a){var n;if(!t)return null;var s=t.type,l=r&&e.state.isScrolledPast[a],m=b()((n={},Object(i.a)(n,"".concat(t.props.className),t.props.className),Object(i.a)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),Object(i.a)(n,"".concat(e.props.scrolledPastClassName),l),n));return o.a.createElement(s,Object.assign({},t.props,{className:m,key:c++}),t.props.children)})),b()(Object(i.a)({},"".concat(n),n));return o.a.createElement(o.a.Fragment,null,l.child||o.a.createElement("div",null,"Catalog"))}}]),a}(o.a.PureComponent),w=a(784),y=a(805),S=a.n(y),C=function(e){w.scroller.scrollTo(e,{duration:1500,delay:100,smooth:"easeInOutQuint",spy:!0,hashSpy:!0,offset:-10})};t.a=function(e){var t=e.categories,a=e.lang,n=e.handleAnimation,i=e.tile,m=e.tileSwitcher,u=(e.info,e.callWaitress),d=Object(l.useState)(82),p=Object(s.a)(d,2),v=p[0],f=p[1],E=t.map((function(e){return e.id})),g=t.map((function(e){return"cat_".concat(e.id)}));return o.a.createElement("section",{className:"navigation",style:{position:"relative"}},o.a.createElement("div",{className:"navigation-fix"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row no-gutters align-items-center"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"dropdown menu",id:"scroll-nav"},o.a.createElement("a",{className:"clt-link dropdown-toggle d-flex","data-default-text":"Catalog",href:"#",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement(k,{items:g,currentClassName:"is-current",offset:-100,onUpdate:function(e){if(e&&e.id){var t=e.id.split("_"),a=Object(s.a)(t,2),n=(a[0],a[1]);n&&f(parseInt(n))}}},t.map((function(e){var t=e.id,n=e.name;return o.a.createElement("li",{key:t},o.a.createElement("a",{href:"cat_".concat(t)},n[a]||n.en))}))),o.a.createElement("img",{className:"ml-4 dropdown-triangle",src:S.a,"aria-labelledby":"dropdownMenuLink"})),o.a.createElement("div",{className:"dropdown-menu",id:"menu-list","aria-labelledby":"dropdownMenuLink"},t.map((function(e){var t=e.id,n=e.name;return o.a.createElement("button",{key:t,onClick:function(){return C("cat_".concat(t))},className:"dropdown-item scroll-to ".concat(v===t?"active":"")},n[a]||n.en)}))))),o.a.createElement("div",{className:"col-auto tile-veiw--wrapper"},o.a.createElement("div",{className:"tile-veiw"},o.a.createElement("button",{onClick:Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.next=3,m(!0);case 3:e.sent&&C("cat_".concat(v));case 5:case"end":return e.stop()}}),e)}))),className:"tile-switcher p-0 ".concat(!0===i?"active":""),"data-type":"main"},o.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 0C0.895431 0 0 0.89543 0 2V6V12V16C0 17.1046 0.89543 18 2 18H6H12H16C17.1046 18 18 17.1046 18 16V12V2C18 0.895431 17.1046 0 16 0H6H2Z",fill:"currentColor"}))),o.a.createElement("button",{onClick:Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.next=3,m(!1);case 3:e.sent&&(t=E.indexOf(v)+1,f(E[t]),C("cat_".concat(E[t+1])));case 5:case"end":return e.stop()}}),e)}))),className:"tile-switcher p-0 ".concat(!0!==i?"active":""),style:{marginLeft:"15px"},"data-type":"list"},o.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 0C0.895431 0 0 0.895431 0 2V6C0 7.10457 0.89543 8 2 8H16C17.1046 8 18 7.10457 18 6V2C18 0.895431 17.1046 0 16 0H2ZM2 10C0.895431 10 0 10.8954 0 12V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V12C18 10.8954 17.1046 10 16 10H2Z",fill:"currentColor"}))))),o.a.createElement("div",{className:"col text-right"},o.a.createElement("button",{onClick:function(e){return u()},className:"clt-btn s-m c-orange call-btn"},"call waitress"))))))}}}]);