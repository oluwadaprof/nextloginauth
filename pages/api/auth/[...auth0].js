// pages/api/auth/[...auth0].js
import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth({
    baseUrl: process.env.AUTH0_BASE_URL
});