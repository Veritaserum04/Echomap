import {
  MapPin,
  Navigation,
  ShieldCheck,
  ScanSearch,
} from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="glass hero-banner">
      <div className="hero-content">
        <p className="hero-tag">EchoMap Indoor Navigation Dashboard</p>

        <h1>
          Navigate Indoor Spaces
          <br />
          With Voice Guidance
        </h1>

        <p className="hero-description">
          Raspberry Pi powered indoor navigation using ultrasonic sensing,
          landmark mapping, occupancy grids and voice assistance.
        </p>
      </div>

      <div className="hero-stats">
        <div className="hero-card">
          <MapPin size={26} color="#22D3EE" />

          <span>User Position</span>

          <h3>Computer Lab</h3>
        </div>

        <div className="hero-card">
          <Navigation size={26} color="#A855F7" />

          <span>Destination</span>

          <h3>Entrance Gate</h3>
        </div>

        <div className="hero-card">
          <ShieldCheck size={26} color="#22C55E" />

          <span>Confidence</span>

          <h3>91%</h3>
        </div>

        <div className="hero-card">
          <ScanSearch size={26} color="#C084FC" />

          <span>Mapped Area</span>

          <h3>61%</h3>
        </div>
      </div>
    </section>
  );
}