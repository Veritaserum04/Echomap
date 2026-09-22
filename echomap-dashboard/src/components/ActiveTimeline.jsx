import {
  Navigation,
  MapPin,
  ScanSearch,
  Footprints,
} from "lucide-react";

const icons = {
  navigation: Navigation,
  landmark: MapPin,
  mapping: ScanSearch,
  walking: Footprints,
};

export default function ActiveTimeline({ events }) {
  return (
    <section className="glass timeline-section">
      <div className="panel-header">
        <div>
          <p>SESSION TIMELINE</p>
          <h2>Recent Navigation Activity</h2>
        </div>
      </div>

      <div className="timeline">
        {events.map((event, index) => {
          const Icon = icons[event.type] || Navigation;

          return (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <Icon size={18} color="#A855F7" />
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>{event.title}</h4>

                  <span>{event.time}</span>
                </div>

                <p>{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}