import { Request, Response, NextFunction } from "express";

export const ErrorHandler = (err: TypeError, _req: Request, res: Response, _next: NextFunction): void => {
  res.status(500).json({
    status: err.name,
    message: err.message,
    data: null,
  });
}