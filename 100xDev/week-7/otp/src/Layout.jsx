import React from "react";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
