import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRoute from './shared/utils/authRoute/AuthRoute';
import LandingPage from './pages/LandingPage';
import Layout from './hoc/layout/Layout';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Alert from './hoc/Alert/Alert';
import Dashboard from './components/dashboard/Dashboard';
import coursePage from './components/course/coursePage/CoursePage';
import './App.css';

//helpers
import authContext from './shared/utils/helpers/authContext';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';
import { authStart } from './store/actions/auth';

if (localStorage.token) {
  authContext(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(authStart());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Layout>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <AuthRoute exact path="/dashboard" component={Dashboard} />
            <AuthRoute exact path="/dashboard/:cid/:coursename" component={coursePage}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
