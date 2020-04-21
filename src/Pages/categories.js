import React from 'react';
import SelectCategoriesMenu from "../Components/SelectCategoriesMenu";

const CategoriesPage = props =>{
    const {match} = props;
    let lang = match.params.lang || 'en';
    
    return(
        <SelectCategoriesMenu lang={lang}/>
    )
}
export default CategoriesPage;
