import { Request, Response } from 'express';
import { User, UserModel, IUser } from '../models';

class AuthController {
  async login(request: Request, response: Response): Promise<void> {
    const user = (await User.findOne({
      email: request.body.email,
    }).lean()) as UserModel;

    try {
      await (User as IUser).validatePassword(
        request.body.password,
        user.password
      );
    } catch (e) {
      throw new Error('No such user/password combination');
    }

    // setup token access
  }

  async register(request: Request, response: Response): Promise<void> {
    const user = await User.create(request.body);

    // send email confirmation email...
  }

  async logout(request: Request, response: Response): Promise<void> {}
}

export const authController = new AuthController();
