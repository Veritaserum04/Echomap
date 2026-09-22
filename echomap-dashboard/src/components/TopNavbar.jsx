import {
  Search,
  Bell,
  BatteryCharging,
  Wifi,
  WifiOff,
} from "lucide-react";

export default function TopNavbar({
  connected = false,
  battery = 94,
}) {
  return (
    <header className="top-navbar glass">
      <div className="navbar-left">
        <h2>EchoMap Dashboard</h2>

        <div className="search-box">
          <Search size={18} color="#A855F7" />

          <input
            type="text"
            placeholder="Search landmarks..."
          />
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-button">
          <Bell size={18} />
        </button>

        <div className="status-chip">
          {connected ? (
            <>
              <Wifi size={16} color="#22C55E" />
              Connected
            </>
          ) : (
            <>
              <WifiOff size={16} color="#F59E0B" />
              Simulation
            </>
          )}
        </div>

        <div className="status-chip">
          <BatteryCharging size={16} color="#22C55E" />
          {battery}%
        </div>
      </div>
    </header>
  );
}