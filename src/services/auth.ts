import BaseRequest from ".";
import { LoginPayload, SignupPayload } from "./types";
import { AUTH_ROUTES } from "./routes";

class AuthService extends BaseRequest {
  constructor() {
    super();
  }
  login = async (payload: LoginPayload) => {
    return await this.auth.post(AUTH_ROUTES.LOGIN, payload);
  };
  register = async (payload: SignupPayload) => {
    return await this.auth.post(AUTH_ROUTES.REGISTER, payload);
  };
}

const authService = new AuthService();

export { authService };
