import {
  MapPinned,
  Flag,
  Route,
  Square,
} from "lucide-react";

const GRID = 20;

export default function OccupancyGrid({
  userPosition,
  destinationPosition,
  path = [],
  obstacles = [],
  exploredCells = 0,
}) {
  const isObstacle = (x, y) =>
    obstacles.some((c) => c.x === x && c.y === y);

  const isPath = (x, y) =>
    path.some((c) => c.x === x && c.y === y);

  return (
    <section className="glass occupancy-section">
      <div className="panel-header">
        <div>
          <p>LIVE OCCUPANCY GRID</p>
          <h2>Indoor Environment Map</h2>
        </div>

        <div className="explored-chip">
          {exploredCells} Cells Explored
        </div>
      </div>

      <div className="occupancy-grid">
        {Array.from({ length: GRID }).map((_, row) =>
          Array.from({ length: GRID }).map((_, col) => {
            let className = "grid-cell";

            if (isPath(col, row)) className += " path";
            if (isObstacle(col, row)) className += " obstacle";

            if (
              destinationPosition?.x === col &&
              destinationPosition?.y === row
            )
              className += " destination";

            if (
              userPosition?.x === col &&
              userPosition?.y === row
            )
              className += " user";

            return (
              <div
                key={`${row}-${col}`}
                className={className}
              />
            );
          })
        )}
      </div>

      <div className="grid-legend">
        <Legend label="User Position" color="user" icon={MapPinned} />
        <Legend label="Destination" color="destination" icon={Flag} />
        <Legend label="Navigation Path" color="path" icon={Route} />
        <Legend label="Obstacle" color="obstacle" icon={Square} />
      </div>
    </section>
  );
}

function Legend({ label, color, icon: Icon }) {
  return (
    <div className="legend-item">
      <div className={`legend-color ${color}`}></div>

      <Icon size={15} color="#C084FC" />

      <span>{label}</span>
    </div>
  );
}