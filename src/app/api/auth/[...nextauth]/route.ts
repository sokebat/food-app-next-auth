import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { axiosPrivate } from "@/axios/axios";
import toast from "react-hot-toast";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        csrfToken: { label: "csrfToken", type: "hidden" },
      },
      async authorize(credentials) {
        try {
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
                'Content-Type': 'application/json',
                 
                'X-CSRF-Token': credentials?.csrfToken,
              },
            }
          );

          // console.log("API Response:", res.data);

         
        
          const user = res.data.data;

          if (!user) return null;

          return user;
        } catch (error:any) {
          console.error("Authorization error:", error.response?.data || error.message  || error);
          return error.message.data
          return null;
        }
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
