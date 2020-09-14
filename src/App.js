import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Route, Switch} from "react-router";
import './App.css';

import Home from './comp/home';
import Info from './comp/info';
import {DataProvider} from "./comp/data/store";

function App() {
    return (
        <DataProvider>
            <HashRouter>
                <div className={'main'}>
                    <Switch>
                        <Route path={'/'} exact={true} component={Home}/>
                        <Route path={'/info/:id'} exact={true} component={Info}/>
                    </Switch>
                </div>
            </HashRouter>
        </DataProvider>
    );
}

export default App;
