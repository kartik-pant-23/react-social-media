import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/header";
import SideNavigation from "./components/sideNavigation";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <>
      <Header />
      <div className={styles.mainContent}>
        <SideNavigation />
        <Outlet />
      </div>
    </>
  );
}

export default Dashboard;
