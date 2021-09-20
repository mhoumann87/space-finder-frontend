import React from 'react';
import { User } from '../model/User';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';
interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <Login authService={this.authService} />
      </div>
    );
  }
}
