import React from 'react';
import { User } from '../model/User';
import { AuthService } from '../services/AuthService';
interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();

  render() {
    return <h1>Class Component</h1>;
  }
}
