import { useMemo, useState } from "react";
import { Search, MapPin, Navigation } from "lucide-react";

export default function LandmarkTable({ landmarks }) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return landmarks.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, landmarks]);

  return (
    <section className="glass landmark-table">
      <div className="panel-header">
        <div>
          <p>LANDMARK DIRECTORY</p>
          <h2>Saved Indoor Landmarks</h2>
        </div>
      </div>

      <div className="search-box full">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search landmarks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Landmark</th>
            <th>Category</th>
            <th>Distance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((landmark) => (
            <tr key={landmark.name}>
              <td>
                <div className="landmark-name">
                  <MapPin size={18} color="#A855F7" />

                  <div>
                    <strong>{landmark.name}</strong>

                    <small>{landmark.location}</small>
                  </div>
                </div>
              </td>

              <td>{landmark.category}</td>

              <td>{landmark.distance} m</td>

              <td>
                <span className="status-pill">{landmark.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="primary-button">
        <Navigation size={18} />
        Navigate to Selected Landmark
      </button>
    </section>
  );
}