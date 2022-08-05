import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { IUserRequestBody, IDatabaseResult } from './interface';

const prisma = new PrismaClient();

export class UserController {

  async findUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: number = parseInt(req.params.id)

      const result: IDatabaseResult = await prisma.user.findUniqueOrThrow({
        where: {
          id,
        }
      });

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body as IUserRequestBody;

      const data = {
        name: body.name,
        username: body.username,
        email: body.email,
        phone: body.phone,
        website: body.website,
      };

      const result: IDatabaseResult = await prisma.user.create({ data });

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: number = parseInt(req.params.id);

      const result: IDatabaseResult = await prisma.user.delete({
        where: {
          id,
        },
      });

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}