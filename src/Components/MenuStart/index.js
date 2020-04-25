import React from 'react';
import {connect} from 'react-redux';
import {scrollTo} from '../../reducers/currentPage';
import { HashLink as Link } from 'react-router-hash-link';

import Flip from '../../images/flip.png';

const MenuStart = ({ lang, info, banner, categories, scroll }) => {
  return (
    <div className="cat-wrapper" id="category">
      <div className="book-start"> 
        <img className="banner" src={info.banner} alt="banner" />
        <h1 className="select-cat__heading">Menu</h1>
        {/* <a className="select-cat__link" key={0} href={`#/${lang}/${0}`}>ALL</a> */}
        {categories.map(({ id, name }, index)=>{
          return(
            // <Link key={id} smooth className="select-cat__link" to={`/${lang}/menu#cat_${id}`}>{name[lang] || name['en']}</Link>
            <p key={id} className="select-cat__link" onClick={() => scroll(++index)}>{name[lang] || name['en']}</p>
          )
        })}
      </div>
      <div className="menu-start" style={{ backgroundImage: `url(${banner})` }}>
        {/* <img сlassName="flip" src={Flip}  alt="flip icon" /> */}
      </div>
    </div>
  );
};

const mapMethodsToProps = {
  scroll: scrollTo
};

export default connect(null, mapMethodsToProps)(MenuStart);