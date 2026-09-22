import {
  Wifi,
  WifiOff,
  Clock3,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export default function ConnectionIndicator({
  connected = false,
  lastSync,
  deviceName,
}) {
  return (
    <section className="glass connection-section">
      <div className="panel-header">
        <div>
          <p>DEVICE CONNECTION</p>
          <h2>EchoMap Status</h2>
        </div>

        {connected ? (
          <div className="status-connected">
            <Wifi size={18} />
            Connected
          </div>
        ) : (
          <div className="status-offline">
            <WifiOff size={18} />
            Simulation
          </div>
        )}
      </div>

      <div className="device-status-card">
        <Cpu size={28} color="#A855F7" />

        <div>
          <span>Connected Device</span>
          <h3>{deviceName}</h3>
        </div>

        {connected ? (
          <CheckCircle2 size={24} color="#22C55E" />
        ) : (
          <Clock3 size={24} color="#F59E0B" />
        )}
      </div>

      <div className="connection-info">
        <div className="connection-item">
          <span>Connection Quality</span>

          <strong>
            {connected ? "Excellent" : "Waiting for Device"}
          </strong>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: connected ? "100%" : "35%",
            }}
          />
        </div>

        <div className="connection-item">
          <span>Last Synchronization</span>

          <strong>{lastSync}</strong>
        </div>
      </div>
    </section>
  );
}