import React from 'react';
import { DirectoryListContainer } from './directory-list.styles'
import DirectoryItem from '../directory-item/directory-item.component';


const DirectoryList = () => {
    return (
        <DirectoryListContainer>
            <DirectoryItem small url="/assets/services.jpg"></DirectoryItem>
            <DirectoryItem medium></DirectoryItem>
            <DirectoryItem large></DirectoryItem>
            <DirectoryItem medium></DirectoryItem>
            {/* <DirectoryItem small></DirectoryItem> */}
        </DirectoryListContainer>
    );
};

export default DirectoryList;