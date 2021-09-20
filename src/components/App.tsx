import React from 'react';
import { User } from '../model/User';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  constructor(props: any) {
    super(props);

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
      <div>
        <h1>Class Component</h1>
        <Login authService={this.authService} setUser={this.setUser} />
      </div>
    );
  }
}
