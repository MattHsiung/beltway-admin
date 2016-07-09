import router			from 'express';
import * as controller	from './vs.controller';
import {verifyUser}		from '../../auth/auth-util';

const VsRouter = router();

VsRouter.route('/')
  .get(verifyUser, controller.get)

export default VsRouter;