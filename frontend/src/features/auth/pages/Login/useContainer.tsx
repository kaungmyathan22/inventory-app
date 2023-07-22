import { AuthApiService } from "@/services/Auth.service";
import { useUserStore } from "@/stores/user.store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { loginSchema } from "../schema/login.schema";

interface ILoginForm {
  password: string;
  email: string;
}

const useContainer = () => {
  const { login } = useUserStore();
  const loginMutation = useMutation({
    mutationFn: AuthApiService.login,
    onSuccess: (data) => {
      login(data.user);
      localStorage.setItem("token", data.token);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    watch,
  } = useForm<ILoginForm>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  function loginHandler() {
    console.log("Submitting");
    loginMutation.mutate({
      ...watch(),
    });
  }

  return {
    handleSubmit,
    loginHandler,
    register,
    isValid,
    isLoading: loginMutation.isLoading,
    errors,
  };
};

export default useContainer;
