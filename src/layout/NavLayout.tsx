import { Nav } from "@/components/Nav";
import { MainLayout } from "@/layout/MainLayout";
import React from "react";

export const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <MainLayout>{children}</MainLayout>
    </>
  );
};
