import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Counter from './components/Counter'
import Player from './components/Player'



let store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const RootWithRouteAndRedux = () => (
    <Provider store={store}>
      <Router>
      <div>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/counter">Counter</Link>
            </li>
            <li>
            <Link to="/player">Player</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/counter" component={Counter}/>
            <Route path="/player" component={Player} />
            <Route render={() => <div>Not Found !!</div>}  />
        </Switch>
        </div>
      </Router>
    </Provider>
)

ReactDOM.render(
    <RootWithRouteAndRedux />
    , document.getElementById('root'));

// ReactDOM.render(
// <Provider store={store}>
// <App />
// </Provider>
// , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
