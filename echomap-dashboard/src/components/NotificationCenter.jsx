import {
  Bell,
  Navigation,
  MapPin,
  ScanSearch,
  Mic,
} from "lucide-react";

const iconMap = {
  navigation: Navigation,
  landmark: MapPin,
  mapping: ScanSearch,
  voice: Mic,
};

export default function NotificationCenter({
  notifications,
}) {
  return (
    <section className="glass notification-center">
      <div className="panel-header">
        <div>
          <p>ACTIVITY FEED</p>
          <h2>Live Notifications</h2>
        </div>

        <Bell size={22} color="#A855F7" />
      </div>

      <div className="notification-list">
        {notifications.map((item) => {
          const Icon = iconMap[item.type] || Bell;

          return (
            <div key={item.id} className="notification-card">
              <div className="notification-icon">
                <Icon size={18} color="#A855F7" />
              </div>

              <div className="notification-content">
                <p>{item.message}</p>

                <span>{item.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}