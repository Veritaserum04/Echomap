import NavigationPanel from "../components/NavigationPanel";
import NavigationCompass from "../components/NavigationCompass";
import LiveCompass from "../components/LiveCompass";
import OccupancyGrid from "../components/OccupancyGrid";
import useEchoMapSocket from "../hooks/useEchoMapSocket";

export default function Navigation() {
  const liveData = useEchoMapSocket();

  const navigation = liveData.navigation || {
    instruction: "Walk forward 5 steps",
    heading: "NORTH",
    remainingDistance: 12.4,
    remainingSteps: 18,

    currentPosition: { x: 10, y: 12 },

    destinationPosition: {
      x: 17,
      y: 4,
      name: "Entrance Gate",
    },

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
    ],
  };

  return (
    <div className="page-container">
      <NavigationPanel navigation={navigation} />

      <div className="dashboard-grid">
        <LiveCompass heading={navigation.heading} />

        <NavigationCompass
          heading={navigation.heading}
          destination={navigation.destinationPosition.name}
        />
      </div>

      <OccupancyGrid
        userPosition={navigation.currentPosition}
        destinationPosition={navigation.destinationPosition}
        path={navigation.path}
        obstacles={navigation.obstacles}
        exploredCells={245}
      />
    </div>
  );
}