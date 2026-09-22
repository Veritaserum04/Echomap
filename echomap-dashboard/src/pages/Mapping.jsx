import RadarScanner from "../components/RadarScanner";
import OccupancyGrid from "../components/OccupancyGrid";
import useEchoMapSocket from "../hooks/useEchoMapSocket";

export default function Mapping() {
  const liveData = useEchoMapSocket();

  const mapping = liveData.mapping || {
    currentLocation: { x: 10, y: 12 },
    destination: {
      x: 17,
      y: 4,
      name: "Entrance Gate",
    },
    exploredCells: 245,
    path: [
      { x: 10, y: 12 },
      { x: 11, y: 11 },
      { x: 12, y: 10 },
      { x: 13, y: 9 },
      { x: 14, y: 8 },
      { x: 15, y: 7 },
      { x: 16, y: 6 },
      { x: 17, y: 5 },
      { x: 17, y: 4 },
    ],
    obstacles: [
      { x: 7, y: 6 },
      { x: 8, y: 6 },
      { x: 8, y: 7 },
      { x: 12, y: 10 },
      { x: 13, y: 10 },
    ],
  };

  const sensors = liveData.sensors || {
    left: 34,
    center: 52,
    right: 28,
  };

  return (
    <div className="page-container">
      <RadarScanner sensorReadings={sensors} />

      <OccupancyGrid
        userPosition={mapping.currentLocation}
        destinationPosition={mapping.destination}
        path={mapping.path}
        obstacles={mapping.obstacles}
        exploredCells={mapping.exploredCells}
      />
    </div>
  );
}