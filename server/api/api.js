import router			from 'express';
import UserRouter		from './users/user.router';
import MembersRouter	from './members/members.router';
import VsRouter    from './vs/vs.router';


const ApiRouter = router();

ApiRouter.use('/users',	UserRouter);
ApiRouter.use('/members', MembersRouter);
ApiRouter.use('/vs', VsRouter);

export default ApiRouter;