import api from "@/lib/axios";
import { IUser } from "@/types/model";

interface ILoginPayload {
  email: string;
  password: string;
}

interface ILoginResponse {
  user: IUser;
  token: string;
}

export class AuthApiService {
  static login(payload: ILoginPayload): Promise<ILoginResponse> {
    return api.post("/auth/login", payload).then((res) => res.data);
  }
}
