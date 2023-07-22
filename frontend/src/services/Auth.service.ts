import api from "@/lib/axios";

interface ILoginPayload {
  email: string;
  password: string;
}

export class AuthApiService {
  static login(payload: ILoginPayload) {
    return api.post("/auth/login", payload).then((res) => res.data);
  }
}
