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

interface IProfileResponse {
  user: IUser;
}

export class AuthApiService {
  static login(payload: ILoginPayload): Promise<ILoginResponse> {
    return api.post("/auth/login", payload).then((res) => res.data);
  }

  static profile(): Promise<IProfileResponse> {
    return api.get("/auth/me").then((res) => res.data);
  }
}
