import {
  BatteryCharging,
  Cpu,
  MemoryStick,
  WifiOff,
} from "lucide-react";

export default function BatteryWidget({
  battery,
  cpuTemp,
  ramUsage,
  connected,
}) {
  const metrics = [
    {
      label: "Battery",
      value: battery,
      suffix: "%",
      icon: BatteryCharging,
    },
    {
      label: "CPU Temperature",
      value: cpuTemp,
      suffix: "°C",
      icon: Cpu,
    },
    {
      label: "RAM Usage",
      value: ramUsage,
      suffix: "%",
      icon: MemoryStick,
    },
  ];

  return (
    <section className="glass battery-widget">
      <div className="battery-header">
        <div>
          <p>DEVICE HEALTH</p>

          <h2>Raspberry Pi Monitor</h2>
        </div>

        <div className="connection-chip">
          <WifiOff size={18} color="#F59E0B" />

          <span>{connected ? "Connected" : "Simulation Mode"}</span>
        </div>
      </div>

      <div className="battery-grid">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div key={metric.label} className="battery-card">
              <Icon size={24} color="#A855F7" />

              <span>{metric.label}</span>

              <h3>
                {metric.value}
                {metric.suffix}
              </h3>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${metric.value}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}