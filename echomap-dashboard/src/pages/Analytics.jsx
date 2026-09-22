import {
  MapPinned,
  Route,
  Footprints,
  ScanSearch,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function Analytics() {
  const analytics = {
    mappedArea: "61%",
    landmarksSaved: 8,
    distanceCovered: "138 m",
    obstaclesDetected: 29,
    navigationSessions: 12,
    confidence: "91%",
    avgResponse: "0.28 s",
    activeMode: "Navigation Mode",
  };

  return (
    <div className="page-container">
      <section className="glass analytics-header">
        <p>ANALYTICS</p>
        <h2>EchoMap Navigation Summary</h2>

        <p className="analytics-description">
          Live summary of indoor mapping, navigation performance, and system
          confidence.
        </p>
      </section>

      {/* Summary Cards */}
      <div className="analytics-grid">
        <div className="metric-card">
          <MapPinned size={28} color="#22D3EE" />
          <span>Mapped Area</span>
          <h3>{analytics.mappedArea}</h3>
        </div>

        <div className="metric-card">
          <ScanSearch size={28} color="#A855F7" />
          <span>Landmarks Saved</span>
          <h3>{analytics.landmarksSaved}</h3>
        </div>

        <div className="metric-card">
          <Footprints size={28} color="#38BDF8" />
          <span>Distance Covered</span>
          <h3>{analytics.distanceCovered}</h3>
        </div>

        <div className="metric-card">
          <Route size={28} color="#F97316" />
          <span>Obstacles Detected</span>
          <h3>{analytics.obstaclesDetected}</h3>
        </div>
      </div>

      {/* System Performance */}
      <section className="glass analytics-summary-card">
        <div className="panel-header">
          <div>
            <p>SYSTEM PERFORMANCE</p>
            <h2>Navigation Statistics</h2>
          </div>
        </div>

        <div className="performance-list">
          <div className="performance-item">
            <Route size={20} color="#A855F7" />
            <span>Navigation Sessions</span>
            <strong>{analytics.navigationSessions}</strong>
          </div>

          <div className="performance-item">
            <ShieldCheck size={20} color="#22C55E" />
            <span>Navigation Confidence</span>
            <strong>{analytics.confidence}</strong>
          </div>

          <div className="performance-item">
            <Clock3 size={20} color="#F59E0B" />
            <span>Average Voice Response Time</span>
            <strong>{analytics.avgResponse}</strong>
          </div>

          <div className="performance-item">
            <ScanSearch size={20} color="#38BDF8" />
            <span>Current Operating Mode</span>
            <strong>{analytics.activeMode}</strong>
          </div>
        </div>
      </section>
    </div>
  );
}