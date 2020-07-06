import { Router, Request, Response } from "express";
const authRoutes = Router();
import passport from "passport";
import { isAuthenticated } from "./utils";

const host =
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/";
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
  res.redirect(`${host}admin`);
});
/**
 * Azure will call this after user has completed or cancelled login
 */
authRoutes.get(
  "/azureoauth2/callback",
  passport.authenticate("azure_ad_oauth2", {
    successRedirect: `${host}admin`,
    failureRedirect: `${host}admin/innlogging-feilet`,
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
