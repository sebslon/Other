import jwt from 'jsonwebtoken';

export class AuthTestHelper {
  static signin = async () => {
    const payload = { id: '123', email: 'test@test.com' };
    const token = jwt.sign(payload, process.env.JWT_KEY!);
    const session = { jwt: token };
    const sessionJSON = JSON.stringify(session);
    const base64 = Buffer.from(sessionJSON).toString('base64');

    return `session=${base64}`;
  };
}
