/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { PropTypes } from "prop-types";

import { Route, Switch } from "react-router-dom";
import "./App.css";

import WithSpinner from "./components/_HOC/with-spinner/with-spinner.component";
import WithNavigationGuard from "./components/_HOC/with-navigation-guard/with-navigation-guard.component";

import HomePage from "./pages/home-page/home-page.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SigninSignupPage from "./pages/signin-signup-page/signin-signup-page.component";
// import CartIconMobile from "./components/buttons/my-buttons/cart-icon-mobile/cart-icon-mobile.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import AdminPage from "./pages/admin-page/admin-page.component";


import { selectCurrentUser } from "./redux/user/user.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCurrentUserStart } from "./redux/user/user.slice";
import { resetIsAdmin } from "./redux/user/user.slice";
import { fetchCollectionsStartAsync } from "./redux/items/items.slice";
import { selectFetchItemsLoading } from "./redux/items/items.selectors";
// import { toggleClickDropdownVisibility } from "./redux/dropdown-elements-visibility/dropdown.slice";
import { selectIsAdmin } from "./redux/user/user.selector";


// withSpinner components
const HomePageWithSpinner = WithSpinner(HomePage);
const ShopPageWithSpinner = WithSpinner(ShopPage);
const AdminPageWithNavigationGuard = WithNavigationGuard(AdminPage)


function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFetchItemsLoading);
  const isAdmin = useSelector(selectIsAdmin)
  const currentUser = useSelector(selectCurrentUser)


  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
    dispatch(getCurrentUserStart());
  }, []);

  useEffect(() => {
    if(!currentUser){
      dispatch(resetIsAdmin())
    }
  }, [currentUser])

  return (
    <div className="App">
      <Header />
      {/* <CartIconMobile />  */}

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePageWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path="/creations"
          render={(props) => (
            <ShopPageWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/signin" component={SigninSignupPage} />
        <Route path="/signup" component={SigninSignupPage} />
        <AdminPageWithNavigationGuard path="/admin" redirectUrl="/creations" condition={isAdmin}/>    
      </Switch>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.object,
};

export default App;
