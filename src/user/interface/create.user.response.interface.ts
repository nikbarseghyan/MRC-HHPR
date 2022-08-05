import { IUserRequestBody } from './user.request.body.interface';

interface IUserRequest extends IUserRequestBody {
  id?: number
}

export interface ICreateUserResponse {
  status?: number
  error?: null
  data?: IUserRequest
}