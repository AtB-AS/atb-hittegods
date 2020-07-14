import { Request, Response, NextFunction } from "express";
/**
 * An Express middleware to check if user is authenticated.
 * Returns 401 if not authenticated.
 */
export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  console.log("AOSNFOEUBNFAF")
  if (!req.isAuthenticated()) {
    return res.sendStatus(401);
  }
  next();
};
