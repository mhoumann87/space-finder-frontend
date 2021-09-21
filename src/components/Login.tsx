import React, { SyntheticEvent } from 'react';
import { AuthService } from '../services/AuthService';
import { User } from '../model/User';

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}

interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccessful: boolean;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    loginAttempted: false,
    loginSuccessful: false,
  };

  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
    console.log('Setting username ' + event.target.value);
  }

  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
    console.log('Setting password ' + event.target.value);
  }

  private async handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    this.setState({ loginAttempted: true });

    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    );

    if (result) {
      this.setState({ loginSuccessful: true });
      this.props.setUser(result);
    } else {
      this.setState({ loginSuccessful: false });
    }
  }

  render() {
    let loginMessage: any;

    if (this.state.loginAttempted) {
      if (this.state.loginSuccessful) {
        loginMessage = <p className='success'>Login Successful</p>;
      } else {
        loginMessage = <p className='error'>Password or Username are wrong</p>;
      }
    } else {
      loginMessage = <p>Please enter username and password</p>;
    }

    return (
      <div className='form-box'>
        <h2>Login</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='username'>
            User Name:
            <input
              name='username'
              value={this.state.userName}
              type='text'
              onChange={e => this.setUserName(e)}
            />
          </label>
          <label htmlFor='password'>
            Password:
            <input
              name='password'
              value={this.state.password}
              type='password'
              onChange={e => this.setPassword(e)}
            />
          </label>
          <br />
          <input type='submit' value='Login' className='btn' />
        </form>
        {loginMessage}
      </div>
    );
  }
}
