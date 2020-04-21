import React, {useEffect} from "react";
import {connect} from "react-redux";
import {loadCategories} from "../../reducers/categories";
import {loadProducts} from "../../reducers/products";
import PageLoader from "../PageLoader";
import TestBanner from '../../images/test-banner.png';
import Flipper from '../Flipper';

const SelectCategoriesMenu = props => {
  const { categories, onCreate, info, products } = props;

  useEffect(() => {
    onCreate();
  }, []);

  if (categories.length === 0) {
    return <PageLoader />
  }

  const lang = props.lang || 'en';
  const banner = info.welcome_screen || TestBanner;
  
  return(
		<Flipper lang={lang} info={info} banner={banner} categories={categories} products={products} />
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

