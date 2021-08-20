import React from 'react';
import { StockAvailabilityContainer } from './stock-availability.styles';
import { PropTypes } from 'prop-types'

const StockAvailability = ({stock}) => {
    return (
        <StockAvailabilityContainer>
            {stock  ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="material-icons">check</span>
                <h4>In Stock</h4>
              </div>
            ) : (
              <h4>Available Soon</h4>
            )}
          </StockAvailabilityContainer>
    );
};

StockAvailability.propTypes = {
    stock:PropTypes.bool
}

export default StockAvailability;