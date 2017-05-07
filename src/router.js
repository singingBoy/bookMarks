import React from 'react';
import { Router, Route ,IndexRoute} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Main from './components/Main';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
        <IndexRoute component={Main}/>
        <Route path="/main" component={Main}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
