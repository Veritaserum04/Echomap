import {
  Navigation,
  Footprints,
  Timer,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function NavigationPanel({ navigation }) {
  return (
    <section className="glass navigation-panel">
      <div className="panel-header">
        <div>
          <p>NAVIGATION MODE</p>
          <h2>Indoor Route Guidance</h2>
        </div>

        <Navigation size={28} color="#22D3EE" />
      </div>

      <div className="instruction-card">
        <p>CURRENT INSTRUCTION</p>

        <h1>{navigation.instruction}</h1>
      </div>

      <div className="navigation-grid">
        <InfoCard
          icon={Footprints}
          title="Remaining Steps"
          value={navigation.remainingSteps}
        />

        <InfoCard
          icon={ArrowUpRight}
          title="Distance"
          value={`${navigation.remainingDistance} m`}
        />

        <InfoCard
          icon={Timer}
          title="Estimated Time"
          value="32 sec"
        />

        <InfoCard
          icon={Navigation}
          title="Heading"
          value={navigation.heading}
        />
      </div>

      <div className="location-grid">
        <LocationCard
          title="User Position"
          value={`(${navigation.currentPosition.x}, ${navigation.currentPosition.y})`}
        />

        <LocationCard
          title="Destination"
          value={navigation.destinationPosition.name}
        />
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, value }) {
  return (
    <div className="info-card">
      <Icon size={22} color="#A855F7" />

      <span>{title}</span>

      <h3>{value}</h3>
    </div>
  );
}

function LocationCard({ title, value }) {
  return (
    <div className="location-card">
      <MapPin size={20} color="#A855F7" />

      <div>
        <span>{title}</span>

        <h3>{value}</h3>
      </div>
    </div>
  );
}