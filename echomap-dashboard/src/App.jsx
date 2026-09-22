import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Overview from "./pages/Overview";
import Mapping from "./pages/Mapping";
import Navigation from "./pages/Navigation";
import Discovery from "./pages/Discovery";
import Landmarks from "./pages/Landmarks";
import VoiceConsole from "./pages/VoiceConsole";
import Analytics from "./pages/Analytics";
import SystemStatus from "./pages/SystemStatus";
import Settings from "./pages/Settings";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/overview" replace />} />

        <Route path="overview" element={<Overview />} />
        <Route path="mapping" element={<Mapping />} />
        <Route path="navigation" element={<Navigation />} />
        <Route path="discovery" element={<Discovery />} />
        <Route path="landmarks" element={<Landmarks />} />
        <Route path="voice" element={<VoiceConsole />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="system" element={<SystemStatus />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}