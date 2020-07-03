import express from "express";
import passport from "passport";
import { configPassport } from "./config";
export default async ({ app }: { app: express.Application }) => {
  // Configure passport to enable OIDC / Azure AD
  configPassport();
  app.use(passport.initialize());
  app.use(passport.session());
  console.log(`passport loaded`);
};
