import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

export const loginSchema = yup.object().shape({
  email: yup.string().email().label("Email").required(),
  password: yup
    .string()
    .label("Password")
    .min(6, "Password need to be minimum of 6 characters long")
    .minLowercase(1, "You need to includes at least one lowercase character")
    .minUppercase(1, "You need to includes at least one uppercase character")
    .minNumbers(1, "You need to includes at least one nuumber")
    .minSymbols(1, "You need to includes at least one symbol")
    .required(),
});
