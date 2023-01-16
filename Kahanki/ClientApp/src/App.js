import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import { ProfileCard} from './components/profile/ProfileCard';
import { MatchList } from './components/matchList/MatchList';
import { ChatList } from './components/chatList/ChatList';
import { UserSetting } from './components/userSettings/UserSettings';
import { AuthPage } from './components/AuthPage/AuthPage';

export default class App extends Component {
  static displayName = App.name;



  render () {
    return (
      <Layout>
        <Route exact path='/' component={ ProfileCard } />
        <Route path='/matchs' component={ MatchList } />
        <Route path='/chats' component={ ChatList } />
        <Route path='/settings' component={ UserSetting } />
        <AuthorizeRoute path='/fetch-data' component={FetchData} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
