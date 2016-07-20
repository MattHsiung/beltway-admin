import router			from 'express';
import * as controller	from './auth.controller';
import {verifyUser}		from './auth-util';

const AuthRouter = router();

AuthRouter.post('/login', controller.login);
AuthRouter.post('/signup', controller.signup);

export default AuthRouter;