import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      user: {
        id: number;
        name: string;
        email: string;
        email_verified_at: string;
        token: string;
      };
      token: string;
    };
  }
}
