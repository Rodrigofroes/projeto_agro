import { ILogin } from "./interfaces/login.interface";
import { login, forgotPassword } from "../../firebase/authenticator/auth";

export default class LoginService implements ILogin {
    async login(email: string, password: string): Promise<any> {
        try {
            const data = await login(email, password);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    async forgotPassword(email: string) {

    }
}