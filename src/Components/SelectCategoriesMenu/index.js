import React, {useEffect} from "react";
import {connect} from "react-redux";
import {loadCategories} from "../../reducers/categories";
import {loadProducts} from "../../reducers/products";
import PageLoader from "../PageLoader";
import {Link} from 'react-router-dom';

const SelectCategoriesMenu = props => {
  const { categories, onCreate, info, products } = props;

  useEffect(() => {
    onCreate();
  }, []);

  if (categories.length === 0) {
    return <PageLoader />
  }

  const lang = props.lang || 'en';
  
  return(
    <div className='welcome__inner'>
    <h1>Choose a Category</h1>
    <a key={0} href={`#/${lang}/${0}`}>ALL</a>
    {categories.map(({ id, name })=>{
        return(
            <Link key={id} smooth to={`/${lang}/menu#cat_${id}`}>{name[lang] || name['en']}</Link>
        )
    })}
</div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
    info: state.info,
  }
};

const mapDispatchToProps = dispatch => {
  return{
    onCreate: () => {
      dispatch(loadCategories());
      dispatch(loadProducts());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectCategoriesMenu);

