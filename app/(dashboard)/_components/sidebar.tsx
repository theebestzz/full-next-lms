import React from "react";
import Logo from "./logo";
import Link from "next/link";
import SidebarRoutes from "./sidebar-route";

const SideBar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-auto bg-white shadow-sm">
      <div className="flex items-center justify-center p-5">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default SideBar;
