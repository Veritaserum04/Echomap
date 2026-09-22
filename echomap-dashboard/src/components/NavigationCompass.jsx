import { Compass, Flag } from "lucide-react";
import { motion } from "framer-motion";

const headingAngle = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

export default function NavigationCompass({
  heading,
  destination,
}) {
  return (
    <section className="glass compass-card">
      <div className="panel-header">
        <div>
          <p>DIRECTION GUIDANCE</p>
          <h2>Navigation Compass</h2>
        </div>

        <Compass size={24} color="#A855F7" />
      </div>

      <div className="compass-wrapper">
        <div className="compass-circle">
          <motion.div
            className="compass-needle"
            animate={{
              rotate: headingAngle[heading],
            }}
            transition={{ duration: 0.6 }}
          />

          <div className="compass-center"></div>

          <span className="north">N</span>
          <span className="east">E</span>
          <span className="south">S</span>
          <span className="west">W</span>
        </div>
      </div>

      <div className="destination-card">
        <Flag size={18} color="#22C55E" />

        <div>
          <span>Destination</span>

          <h3>{destination}</h3>
        </div>
      </div>

      <div className="direction-card">
        Continue heading <strong>{heading}</strong>
      </div>
    </section>
  );
}