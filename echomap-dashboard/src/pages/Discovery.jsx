import RadarScanner from "../components/RadarScanner";
import ActiveTimeline from "../components/ActiveTimeline";
import ConfidenceMeter from "../components/ConfidenceMeter";

export default function Discovery() {
  const sensorReadings = {
    left: 34,
    center: 52,
    right: 28,
  };

  const events = [
    {
      type: "mapping",
      title: "Discovery Mode Started",
      description: "Scanning nearby indoor environment.",
      time: "Now",
    },
    {
      type: "walking",
      title: "User moved forward",
      description: "Occupancy map updated with new free space.",
      time: "1 min ago",
    },
    {
      type: "landmark",
      title: "Landmark Detected",
      description: "Computer Lab identified nearby.",
      time: "3 mins ago",
    },
  ];

  return (
    <div className="page-container">
      <RadarScanner sensorReadings={sensorReadings} />

      <div className="dashboard-grid">
        <ConfidenceMeter confidence={91} />

        <ActiveTimeline events={events} />
      </div>
    </div>
  );
}