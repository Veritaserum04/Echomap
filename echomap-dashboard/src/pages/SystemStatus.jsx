import TemperatureGauge from "../components/TemperatureGauge";
import ConnectionIndicator from "../components/ConnectionIndicator";
import BatteryWidget from "../components/BatteryWidget";

export default function SystemStatus() {
  return (
    <div className="page-container">
      <ConnectionIndicator
        connected={false}
        lastSync="2 mins ago"
        deviceName="Raspberry Pi 3 Model B"
      />

      <div className="dashboard-grid">
        <TemperatureGauge temperature={43} />

        <BatteryWidget
          battery={94}
          cpuTemp={43}
          ramUsage={38}
          connected={false}
        />
      </div>

      <section className="glass system-section">
        <h3>System Information</h3>

        <table className="system-table">
          <tbody>
            <tr>
              <td>Device</td>
              <td>Raspberry Pi 3 Model B</td>
            </tr>

            <tr>
              <td>Operating Mode</td>
              <td>Offline Simulation</td>
            </tr>

            <tr>
              <td>Battery</td>
              <td>94%</td>
            </tr>

            <tr>
              <td>CPU Temperature</td>
              <td>43°C</td>
            </tr>

            <tr>
              <td>RAM Usage</td>
              <td>38%</td>
            </tr>

            <tr>
              <td>Navigation Confidence</td>
              <td>91%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}