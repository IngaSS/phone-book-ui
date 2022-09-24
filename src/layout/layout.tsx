import React from "react";
import List from "../components/list";

const Layout = React.memo(() => {
  return <List />;
});

Layout.displayName = "Layout";
export default Layout;
