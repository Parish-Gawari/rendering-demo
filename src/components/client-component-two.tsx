"use client";
import { ClientCompOne } from "./client-component-one";

export const ClientCompTwo = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>This is Client Component Two</h1>
      <ClientCompOne />
      {children}
    </>
  );
};
