import {
  BatteryCharging,
  Cpu,
  ShieldCheck,
  WifiOff,
} from "lucide-react";

export default function StatusCards() {
  const cards = [
    {
      title: "Battery",
      value: "94%",
      icon: BatteryCharging,
      color: "#22C55E",
    },
    {
      title: "CPU Temperature",
      value: "43°C",
      icon: Cpu,
      color: "#FB923C",
    },
    {
      title: "Navigation Confidence",
      value: "91%",
      icon: ShieldCheck,
      color: "#A855F7",
    },
    {
      title: "Connection",
      value: "Simulation",
      icon: WifiOff,
      color: "#F59E0B",
    },
  ];

  return (
    <section className="status-grid">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div key={card.title} className="status-card glass">
            <div
              className="status-icon"
              style={{ backgroundColor: `${card.color}22` }}
            >
              <Icon size={24} color={card.color} />
            </div>

            <span>{card.title}</span>

            <h2>{card.value}</h2>
          </div>
        );
      })}
    </section>
  );
}