class ClientError extends Error {
  name: string;

  constructor(message: string) {
    super(message);
    this.name = 'ClientError';
  }
}

export default ClientError;
