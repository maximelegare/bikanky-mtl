import React from 'react';
import {  PageMediumMarginsContainer } from '../../../_styling-containers/pages-styling-containers/pages-styling-containers.styles';

import { CategoriesFlexWrapperContainer } from './categories-page-admin.styles';

import AdminCard from '../../admin-card/admin-card.component';

import { useSelector } from 'react-redux';
import { selectItemsCategories } from '../../../../redux/items/items.selectors';

const CategoriesPageAdmin = () => {
    const ItemsCategories = useSelector(selectItemsCategories)
    const ItemsCategoriesArray = Object.values(ItemsCategories).map((category) => category.title )
    console.log(ItemsCategoriesArray)
    return (
        <PageMediumMarginsContainer>
           <CategoriesFlexWrapperContainer>
             <AdminCard small titles={ItemsCategoriesArray}/>  
             <AdminCard small titles={ItemsCategoriesArray}/>  
             <AdminCard ></AdminCard>  
           </CategoriesFlexWrapperContainer>
        </PageMediumMarginsContainer>
    );
};

export default CategoriesPageAdmin;