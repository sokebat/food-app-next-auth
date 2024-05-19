import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { axiosPrivate } from "@/axios/axios";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        const res = await axios.post(
          `${process.env.NEXT_AUTH_API_URL}/login`,
          {
            email: credentials?.email,
            password: credentials?.password,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        // return { id: 1, name: "hello" };

        // console.log("this is response", res);

        const user = res.data.data;
        // console.log(user)

        if (!user) return null;

        return user;
      },
    }),
  ],
  session: {
    maxAge: 5 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ user, token, trigger, session }: any) {
      if (trigger === "update") {
        return { ...user, ...session.user };
      }

      return { ...user, ...token };
    },

    async session({ session, token, user }: any) {
      session.user = token;

      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
