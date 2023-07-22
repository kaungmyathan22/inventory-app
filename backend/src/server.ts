import 'dotenv/config';
import { App } from '@config/app';
import i18n from '@config/i18n.config';
import { AuthenticationController } from '@features/authentication/authentication.controller';
import { ProductController } from '@features/product/product.controller';
import { UserController } from '@features/users/users.controller';
import { validateEnv } from '@utils/validateEnv';
i18n.setLocale('en');
validateEnv();

const app = new App([
  new ProductController(),
  new UserController(),
  new AuthenticationController(),
]);
app.run();
