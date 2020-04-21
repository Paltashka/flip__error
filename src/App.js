import React, { Suspense, lazy } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader';
import PageLoader from "./Components/PageLoader";
import { loadLang } from "./reducers/lang";
import { loadInfo } from "./reducers/info";
import { Footer } from './Components/Footer';
import './styles/App.scss';
import './styles/template.scss';

import store from "./store";
import { getParameterByName, getSubdomen } from "./Helpers/helper";
global.table = getParameterByName('table');
global.subdomen = getSubdomen();
// global.subdomen = 'deniz';
global.url = window.test_data_path ? window.test_data_path : `https://${global.subdomen}.sqrmenu.com/api/shop/v1/`;
// global.url = `https://${global.subdomen}.sqrmenu.com/api/shop/v1/`;
console.log(global.url)


window.history.pushState({}, document.title, "/#");

// const url = new URL(`${global.url}views/add`);

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

// fetch(url, {
//     method: "POST",
//     headers: headers,
// })
//     .then(response => response.json())
//     .then(json => console.log(json));

const LangPage = lazy(() => import('./Pages/lang-page'));
const CategoriesPage = lazy(() => import('./Pages/categories'));
const MenuPage = lazy(() => import('./Pages/menu-page'));

global.SHOW_STORE_LOG = false;

store.dispatch(loadLang());
store.dispatch(loadInfo());

const App = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <div className="fullWidth">
                    <Switch>
                        <Suspense fallback={<PageLoader />}>
                            <Route exact path="/" component={LangPage} />
                            <Route exact path="/:lang" component={CategoriesPage} />
                            <Route exact path="/:lang/:category" component={MenuPage} />
                            <Redirect from='*' to='/' />
                        </Suspense>
                    </Switch>
                    {/* <Footer /> */}
                </div>
            </HashRouter>
        </Provider>
    );
}

export default hot(module)(App);
