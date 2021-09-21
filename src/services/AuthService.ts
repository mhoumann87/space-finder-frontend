import { User, UserAttribute } from '../model/User';

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

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];

    result.push({
      Name: 'description',
      Value: 'Best user ever!',
    });

    result.push({
      Name: 'job',
      Value: 'Coder',
    });

    result.push({
      Name: 'department',
      Value: 'Game Dev',
    });

    result.push({
      Name: 'employee',
      Value: '5 years',
    });

    return result;
  }
}
