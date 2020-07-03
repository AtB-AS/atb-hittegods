import passport from "passport";
// @ts-ignore
import AzureAdOAuth2Strategy from "passport-azure-ad-oauth2";
import jwt from "jwt-simple";
const configPassport = () => {
  passport.use(
    new AzureAdOAuth2Strategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URI,
        resource: process.env.RESOURCE_ID,
      },
      // @ts-ignore
      function (accessToken, refresh_token, params, profile, done) {
        const decodedProfile = jwt.decode(params.id_token, "", true);
        console.log(decodedProfile);
        done(null, {
          given_name: decodedProfile.given_name,
          upn: decodedProfile.upn,
        });
      }
    )
  );
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
};
export { configPassport };
