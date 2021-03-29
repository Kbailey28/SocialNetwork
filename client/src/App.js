import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import About from './components/layout/About';
import Pricing from './components/layout/Pricing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Reset from './components/auth/Reset';
import Resetpassword from './components/auth/Resetpassword';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddShortTermDebt from './components/profile-forms/AddShortTermDebt';
import AddMonthlyExpense from './components/profile-forms/AddMonthlyExpense';
import AddOtherExpense from './components/profile-forms/AddOtherExpense';
import Math from './components/profile-forms/Math';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import UserPosts from './components/posts/UserPosts';
import UserPostForm from './components/posts/UserPostForm';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import Quiz from './components/quiz/Quiz';
import QuizInfo from './components/quiz/QuizInfo';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/Register' component={Register} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Pricing' component={Pricing} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/reset' component={Reset} />
              <Route exact path='/Quiz' component={Quiz} />
              <Route exact path='/QuizInfo' component={QuizInfo} />
              <Route exact path='/resetpassword' component={Resetpassword} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/addShortTermDebt'
                component={AddShortTermDebt}
              />
              <PrivateRoute
                exact
                path='/addMonthlyExpense'
                component={AddMonthlyExpense}
              />
              <PrivateRoute
                exact
                path='/addOtherExpense'
                component={AddOtherExpense}
              />
              <PrivateRoute
                exact
                path='/math'
                component={Math}
              />

              <PrivateRoute exact path='/posts-user' component={UserPostForm} />
              <AdminRoute exact path='/posts' component={Posts} />
              <AdminRoute exact path='/profiles' component={Profiles} />
              <AdminRoute exact path='/profile/:id' component={Profile} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
