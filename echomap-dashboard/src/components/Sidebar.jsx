import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";

import {
  LayoutDashboard,
  Map,
  Navigation,
  ScanSearch,
  MapPin,
  Mic,
  Activity,
  Cpu,
  Settings,
} from "lucide-react";

const menuItems = [
  { title: "Overview", path: "/overview", icon: LayoutDashboard },
  { title: "Mapping", path: "/mapping", icon: Map },
  { title: "Navigation", path: "/navigation", icon: Navigation },
  { title: "Discovery", path: "/discovery", icon: ScanSearch },
  { title: "Landmarks", path: "/landmarks", icon: MapPin },
  { title: "Voice Console", path: "/voice", icon: Mic },
  { title: "Analytics", path: "/analytics", icon: Activity },
  { title: "System Status", path: "/system", icon: Cpu },
  { title: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>EchoMap</h1>
        <p>Indoor Navigation</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <SidebarItem icon={item.icon} title={item.title} />
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="device-card">
          <Cpu size={20} />
          <div>
            <h4>Raspberry Pi</h4>
            <span>Offline Simulation</span>
          </div>
        </div>
      </div>
    </aside>
  );
}