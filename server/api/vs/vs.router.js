import router						from 'express';
import * as controller	from './vs.controller';
import {verifyUser}			from '../../auth/auth-util';

const VsRouter = router();

VsRouter.route('/')
  .post(verifyUser, controller.post);

VsRouter.route('/actions')
	.get(controller.get);

export default VsRouter;