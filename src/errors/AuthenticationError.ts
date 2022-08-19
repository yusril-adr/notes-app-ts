import ClientError from './ClientError';

class AuthenticationError extends ClientError {
  name: string;

  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export default AuthenticationError;
