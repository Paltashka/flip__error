import React, {useMemo} from 'react';
import {Element} from "react-scroll";

const Products = props => {
    const {
        products,
        categories,
        lang,
        info,
        item
      } = props;

const {id:catid,name,pr} = item;      



    return(
      <main className="menu-section tile-view-main">
        <div className="container">
              <Element key={catid} className="menu-category" id={`cat_${catid}`} name={`cat_${catid}`}>
                <div className="category-list row">
                  {
                    pr.map(({id,price,name,description,count_in_cart,images})=>{
                      let img = Array.isArray(images)&&images.length>0?images[0]:'./assets/images/breakfast1.jpg';
                      return(
                        
                        <div key={id} className="col-md-6 col-lg-4">
                          <div className={`menu-item`}>
                            <div className="img">
                              <img
                                // onClick={()=>props.tileSwitcher(tile,id)}
                                src={img}
                                alt={name[lang]}/>
                              <div className="code">
                                AED {price}
                              </div>
                            </div>
                            <div className="row align-items-center no-gutters">
                                <div className="col info">
                                  <div className="name">
                                    {name[lang] || name['en']}
                                  </div>
                                  <div className="desc">
                                    {description[lang] || description['en']}
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        
                      )
                    })
                  }
                </div>
            </Element>

      </div>
     </main>
    )
}
export default Products;
