import { User } from '../model/User';

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === 'user' && password === '1234') {
      return {
        userName: userName,
        email: 'test@testing.com',
      };
    } else {
      return undefined;
    }
  }
}
