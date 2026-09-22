import { Navigation } from "lucide-react";

const rotationMap = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

export default function LiveCompass({ heading }) {
  return (
    <section className="glass compass-card">
      <div className="panel-header">
        <div>
          <p>CURRENT ORIENTATION</p>
          <h2>User Heading</h2>
        </div>

        <Navigation size={24} color="#22D3EE" />
      </div>

      <div className="compass-wrapper">
        <div className="compass-circle">
          <div
            className="compass-needle live"
            style={{
              transform: `rotate(${rotationMap[heading]}deg)`,
            }}
          />

          <div className="compass-center live-center" />

          <span className="north">N</span>
          <span className="east">E</span>
          <span className="south">S</span>
          <span className="west">W</span>
        </div>
      </div>

      <h3 className="heading-value">{heading}</h3>

      <p className="heading-text">
        Current movement direction of the user inside the mapped area.
      </p>
    </section>
  );
}