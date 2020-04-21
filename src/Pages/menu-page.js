import React, { useEffect} from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {connect} from "react-redux";
import MenuNavigator from "../Components/Menu-navigator";
import Products from "../Components/Products";
import PageLoader from '../Components/PageLoader';

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

class MenuPage extends React.Component{
    constructor() {
        super();
        this.state={
            tile:true,
            tiles:{},
            messageText:undefined,
        }
        this.sectionsWrapperRef = React.createRef();
        
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
        const {match, products, categories, info } = this.props;
        let lang = match.params.lang || 'en';

        const {
            tile,
            tiles,
            messageText,
        } = this.state;


        return(
            <>
                <div className="wrapper fade-in">
                    <Header info={info}/>
                    <MenuNavigator
                        handleAnimation={this.handleAnimation}
                        // callWaitress={this.callWaitress}
                        sectionsWrapperRef={this.sectionsWrapperRef}
                        tileSwitcher={this.tileSwitcher}
                        tile={tile} categories={categories} lang={lang} info={info}
                    />

                    <Products
                        sectionsWrapperRef={this.sectionsWrapperRef}
                        tile={tile}
                        tiles={tiles}
                        info={info}
                        products={products}
                        categories={categories}
                        tileSwitcher={this.tileSwitcher}
                        lang={lang}/>
                </div>
                <MessageBlock text={messageText}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        info:state.info||{},
        products:state.products||[],
        categories:state.categories||[],
    }
};

export default connect(mapStateToProps, null)(MenuPage);
