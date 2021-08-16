import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
export default NextAuth({
    providers: [
        Providers.Auth0({
            clientId:process.env.AUTH0_CLIENT_ID,
            clientSecret:process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN
        }),
    // OAuth authentication providers...
    // Providers.Apple({
    // clientId: process.env.APPLE_ID,
    // clientSecret: process.env.APPLE_SECRET
    // }),
    // Providers.GitHub({
    // clientId: process.env.GITHUB_ID,
    // clientSecret: process.env.GITHUB_SECRET
    // }),
    // Providers.Google({
    // clientId: process.env.GOOGLE_ID,
    // clientSecret: process.env.GOOGLE_SECRET
    // }),
    // Passwordless / email sign in
    // Providers.Email({
    // server: process.env.MAIL_SERVER,
    // from: 'NextAuth.js <no-reply@example.com>'
    // }),
    ],
    // Optional SQL or MongoDB database to persist users
    // database: process.env.DATABASE_URL
})



