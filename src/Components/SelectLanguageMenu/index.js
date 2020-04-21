import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {updateImage} from "../../reducers/info";
import PageLoader from "../PageLoader";

const SelectLanguageMenu = props =>{
    const [prerolImg, setprerolImg] = useState(true);
    const [test, setTest] = useState(true);
    const lang = props.lang || {};

    if (lang.length === 0) {
        return <PageLoader />
    }

    const {info} = props;
    let banner = info ? info.banner : undefined;
    
    delete lang.en;

    const menu = Object.entries(lang).map(([code,name])=>({ code, name }));

    if (menu.length > 0) {
        menu.unshift({code: "en", name: "English"});
    }


    // useEffect(() => {
    //     if (banner) {
    //         props.UpdateImage(info);
    //     }
    // }, [banner]);

    // setTimeout( async () => {
    //     await setprerolImg(false)
    //     setTimeout(() => setTest(false),1000) 
    //    },2500)

   return (
       <div className='welcome__inner'>
           {/* <img style={{ opacity: prerolImg ? 1 : 0, display: test ? "block" : "none" }} src={info.welcome_screen} /> */}
           {/* <div style={{ display: !test ? "block" : "none"}}> */}
            <div>
               {menu.length > 0 && <h1>CHOOSE LANGUAGE</h1>}
               {menu.map(({code,name})=>{
                return(
                    <a key={code} href={`#/${code}`}>{name}</a>
                )
               })}
           </div>
       </div>        
   )
}
const mapStateToProps = state => {
    return {
        lang:state.lang,
        info:state.info,
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        UpdateImage:(info)=>{
            dispatch(updateImage(info));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguageMenu);