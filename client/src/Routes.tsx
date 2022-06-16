import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import ShopPlayers from 'components/Shop/ShopPlayers';

const Routes: React.FunctionComponent = () => (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPlayers} />
            <Route path="/cart" component={Cart} />
            <Route render={() => <Redirect to="/"/>}/>
        </Switch>
    </>
);

export default Routes;
