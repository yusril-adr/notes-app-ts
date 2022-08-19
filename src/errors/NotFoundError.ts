import ClientError from './ClientError';

class NotFoundError extends ClientError {
  name: string;

  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
