import { Nav } from "@/components/Nav";
import React from "react";

export const NavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:w-6/12 mx-auto">
      <Nav />
      {children}
    </div>
  );
};
