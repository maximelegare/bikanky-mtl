/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { PropTypes } from "prop-types";

import { Route, Switch } from "react-router-dom";
import "./App.css";

import WithSpinner from "./components/_HOC/with-spinner/with-spinner.component";
import HomePage from "./pages/home-page/home-page.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import SigninSignupPage from "./pages/signin-signup-page/signin-signup-page.component";
// import CartIconMobile from "./components/buttons/my-buttons/cart-icon-mobile/cart-icon-mobile.component";
import CheckoutPage from "./pages/checkout-page/checkout-page.component";
import AdminPage from "./pages/admin-page/admin-page.component";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCurrentUserStart } from "./redux/user/user.slice";
import { fetchCollectionsStartAsync } from "./redux/items/items.slice";
import { selectFetchItemsLoading } from "./redux/items/items.selectors";
// import { toggleClickDropdownVisibility } from "./redux/dropdown-elements-visibility/dropdown.slice";

import { selectIsAdmin } from "./redux/user/user.selector";


// withSpinner components
const HomePageWithSpinner = WithSpinner(HomePage);
const ShopPageWithSpinner = WithSpinner(ShopPage);

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFetchItemsLoading);
  const isAdmin = useSelector(selectIsAdmin)

  console.log("isAdmin", isAdmin)


  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
    dispatch(getCurrentUserStart());

    // setTimeout(() => {
    //   dispatch(
    //     toggleClickDropdownVisibility({ dropdownName: "signIn", value: true })
    //   );
    // }, 700);
  }, []);

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
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  match: PropTypes.object,
};

export default App;
