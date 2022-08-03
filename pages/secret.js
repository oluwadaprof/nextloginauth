import {
  getSession,
  withApiAuthRequired
} from "@auth0/nextjs-auth0";

export default withApiAuthRequired(function secretRoute(res, req) {
  const session = getSession(req, res);
  const user = session.user;
  console.log(user)
});
