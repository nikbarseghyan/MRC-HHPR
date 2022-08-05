import { Router } from 'express';
import { UserController } from './user.controller';

const UserRouter = Router();
const controller = new UserController();

UserRouter
  .route("/user/:id")
  .get(controller.findUser)
  .delete(controller.deleteUser);
UserRouter
  .route("/user") 
  .post(controller.createUser);

export default UserRouter;
