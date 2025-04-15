import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23lirv1bZeYAXVw7yx",
      clientSecret: "baa3ab8059e4b92c74a6898ebf948e0a73dad994",
    }),
  ],
};

export default NextAuth(authOptions);
