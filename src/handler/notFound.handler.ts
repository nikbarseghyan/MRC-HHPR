import { Request, Response, NextFunction } from "express";

export const NotFoundHandler = (_req: Request, res: Response, _next: NextFunction): void => {

  res.status(404).json({
    status: "notFound",
    message: "Resource not found",
    data: null,
  });
}