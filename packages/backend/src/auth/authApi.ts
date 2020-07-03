import { Router, Request, Response } from "express";
const authRoutes = Router();
import passport from "passport";
import { isAuthenticated } from "./utils";
/**
 * Redirects to azure/ad login
 */
authRoutes.get(
  "/login",
  passport.authenticate("azure_ad_oauth2"),
  async (req: Request, res: Response) => {
    return res.json(req.user);
  }
);
/**
 * Redirects to azure/ad login
 */
authRoutes.get("/logout", async (req: Request, res: Response) => {
  req.logout();
  res.redirect(
    process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000"
  );
});
/**
 * Azure will call this after user has completed or cancelled login
 */
authRoutes.get(
  "/azureoauth2/callback",
  passport.authenticate("azure_ad_oauth2", {
    //TODO figure out the paths
    successRedirect:
      process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000",
    failureRedirect:
      process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000",
  })
);
/**
 * Fetches the user associated with the current session
 */
authRoutes.get(
  "/user",
  isAuthenticated,
  async (req: Request, res: Response) => {
    return res.json(req.user);
  }
);
export { authRoutes };
