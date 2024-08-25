import { signIn, signOut } from "next-auth/react";

export const Login = () => {
  return (
    <>
      <header>Login!!</header>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export const Logout = () => {
  return (
    <>
      <header>Logout!!</header>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};
