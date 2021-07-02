/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { selectItem } from '../../../redux/items/items.selectors'


const ItemSpecifications = ({item}) => {
    const {title} = item[0]
    return (
        <div>
          {title}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    item: selectItem(ownProps.match.params)(state)
})


export default withRouter(connect(mapStateToProps)(ItemSpecifications));