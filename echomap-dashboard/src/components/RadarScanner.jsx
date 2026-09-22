import { motion } from "framer-motion";
import { ScanSearch, TriangleAlert } from "lucide-react";

export default function RadarScanner({ sensorReadings }) {
  const sensors = [
    { label: "Left Sensor", value: sensorReadings.left },
    { label: "Front Sensor", value: sensorReadings.center },
    { label: "Right Sensor", value: sensorReadings.right },
  ];

  const status = (distance) => {
    if (distance < 20) return { text: "Obstacle Nearby", color: "#EF4444" };
    if (distance < 40) return { text: "Proceed Carefully", color: "#F59E0B" };
    return { text: "Path Clear", color: "#22C55E" };
  };

  return (
    <section className="glass radar-section">
      <div className="panel-header">
        <div>
          <p>DISCOVERY MODE</p>
          <h2>Ultrasonic Discovery Scanner</h2>
        </div>

        <ScanSearch size={24} color="#A855F7" />
      </div>

      <div className="radar-circle">
        <div className="radar-ring ring1"></div>
        <div className="radar-ring ring2"></div>
        <div className="radar-ring ring3"></div>

        <motion.div
          className="radar-sweep"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        />

        <div className="radar-center"></div>

        <div className="sensor-point left"></div>
        <div className="sensor-point front"></div>
        <div className="sensor-point right"></div>
      </div>

      <div className="sensor-grid">
        {sensors.map((sensor) => {
          const info = status(sensor.value);

          return (
            <div className="sensor-card" key={sensor.label}>
              <span>{sensor.label}</span>

              <h2>{sensor.value} cm</h2>

              <p style={{ color: info.color }}>{info.text}</p>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${sensor.value}%`,
                    background: info.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="environment-summary">
        <TriangleAlert size={18} color="#F59E0B" />

        <p>
          {sensorReadings.center < 20
            ? "Obstacle detected ahead. Please move slightly left or right."
            : "Environment scan complete. Path ahead appears clear."}
        </p>
      </div>
    </section>
  );
}