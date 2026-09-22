import HeroBanner from "../components/HeroBanner";
import StatusCards from "../components/StatusCards";
import BatteryWidget from "../components/BatteryWidget";
import ConfidenceMeter from "../components/ConfidenceMeter";
import RadarScanner from "../components/RadarScanner";
import NotificationCenter from "../components/NotificationCenter";
import useEchoMapSocket from "../hooks/useEchoMapSocket";

export default function Overview() {
  const liveData = useEchoMapSocket();

  const notifications = liveData.notifications || [
    {
      id: 1,
      type: "navigation",
      message: "Navigation started towards Computer Lab.",
      time: "Now",
    },
    {
      id: 2,
      type: "mapping",
      message: "Occupancy grid updated successfully.",
      time: "5 mins ago",
    },
    {
      id: 3,
      type: "landmark",
      message: "New landmark 'Faculty Desk' saved.",
      time: "12 mins ago",
    },
  ];

  const sensors = liveData.sensors || {
    left: 34,
    center: 52,
    right: 28,
  };

  const system = liveData.system || {
    battery: 94,
    cpuTemp: 43,
    ramUsage: 38,
    confidence: 91,
    connected: false,
  };

  return (
    <div className="page-container">
      <HeroBanner />

      <StatusCards />

      <div className="dashboard-grid">
        <RadarScanner sensorReadings={sensors} />

        <ConfidenceMeter confidence={system.confidence} />
      </div>

      <BatteryWidget
        battery={system.battery}
        cpuTemp={system.cpuTemp}
        ramUsage={system.ramUsage}
        connected={system.connected}
      />

      <NotificationCenter notifications={notifications} />
    </div>
  );
}