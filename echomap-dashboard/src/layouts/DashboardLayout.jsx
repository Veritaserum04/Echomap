import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        <TopNavbar />

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}