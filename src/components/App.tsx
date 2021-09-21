import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../utils/history';
import { User } from '../model/User';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
import { NavBar } from './NavBar';
import { Home } from './Home';
import { Profile } from './Profile';

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  constructor(props: any) {
    super(props);

    this.state = {
      user: undefined,
    };

    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    this.setState({
      user,
    });
    console.log('User: ' + user);
  }

  render() {
    return (
      <div className='wrapper'>
        <Router history={history}>
          <div>
            <NavBar user={this.state.user} />
            <Switch>
              <Route exact path='/' component={Home} />

              <Route exact path='/login'>
                <Login authService={this.authService} setUser={this.setUser} />
              </Route>

              <Route exact path='/profile' component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
