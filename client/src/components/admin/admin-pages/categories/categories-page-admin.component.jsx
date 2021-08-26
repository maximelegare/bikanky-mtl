import React, {useState} from 'react';
import {  PageMediumMarginsContainer } from '../../../_styling-containers/pages-styling-containers/pages-styling-containers.styles';

import { CategoriesFlexWrapperContainer } from './categories-page-admin.styles';

import AdminCard from '../../admin-card/admin-card.component';

import { useSelector } from 'react-redux';
import { selectItemsCategories, selectCategoryItemsTest } from '../../../../redux/items/items.selectors';

const CategoriesPageAdmin = () => {
    const [buttonValue, setButtonValue] = useState("sneakers");

    const itemsCategories = useSelector(selectItemsCategories)
    const itemsCategoriesArray = Object.values(itemsCategories).map((category) => category.title)
    
    const category = useSelector((state) =>
    selectCategoryItemsTest(state, buttonValue)
  );

    const itemsCategoryTitlesArray = category.items?.map((item) => item.title)
    console.log(itemsCategoryTitlesArray)


    const handleClick = (e) => {
        setButtonValue(e.target.value)
    }


    return (
        <PageMediumMarginsContainer>
           <CategoriesFlexWrapperContainer>
             <AdminCard small titles={itemsCategoriesArray} handleClick={handleClick}/>  
             <AdminCard small titles={itemsCategoryTitlesArray} />  
             <AdminCard ></AdminCard>  
           </CategoriesFlexWrapperContainer>
        </PageMediumMarginsContainer>
    );
};

export default CategoriesPageAdmin;