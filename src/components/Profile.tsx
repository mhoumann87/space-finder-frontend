import React from 'react';
import { Link } from 'react-router-dom';
import { User, UserAttribute } from '../model/User';
import { AuthService } from '../services/AuthService';

import './Profile.css';

interface ProfileState {
  userAttributes: UserAttribute[];
}

interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    userAttributes: [],
  };

  async componentDidMount() {
    if (this.props.user) {
      const userAttributes = await this.props.authService.getUserAttributes(
        this.props.user
      );
      this.setState({
        userAttributes,
      });
    }
  }

  private renderUserAttributes() {
    const rows = [];

    for (const UserAttribute of this.state.userAttributes) {
      rows.push(
        <tr key={UserAttribute.Name}>
          <td>{UserAttribute.Name}</td>
          <td>{UserAttribute.Value}</td>
        </tr>
      );
    }

    return (
      <table>
        <tr>
          <th>Information about {this.props.user!.userName}</th>
          <th></th>
        </tr>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div className='profile-main'>
        <h2>Profile</h2>
        {this.props.user ? (
          <div>
            <h3>Welcome back {this.props.user.userName}</h3>
            <p>Here are your information:</p>
            {this.renderUserAttributes()}
          </div>
        ) : (
          <div>
            <h3>
              Please&nbsp;
              <Link to='/login'>Login</Link>
            </h3>
          </div>
        )}

        {}
      </div>
    );
  }
}
