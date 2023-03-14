import React from "react";
import Header from "../../components/header";
import SideMenu from "../../components/side_menu";

export default function AdminLayout({ children }) {
  return (
    <div style={{ marginTop: 40 }}>
      <Header />
      <SideMenu />
      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
