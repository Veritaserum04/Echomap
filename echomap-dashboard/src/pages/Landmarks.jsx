import LandmarkTable from "../components/LandmarkTable";

export default function Landmarks() {
  const landmarks = [
    {
      name: "Computer Lab",
      category: "Academic Block",
      location: "First Floor",
      x: 10,
      y: 5,
      distance: 6.4,
      status: "Reachable",
    },
    {
      name: "Library",
      category: "Academic Block",
      location: "Ground Floor",
      x: 16,
      y: 12,
      distance: 14.1,
      status: "Reachable",
    },
    {
      name: "Faculty Desk",
      category: "Department Office",
      location: "ISE Department",
      x: 8,
      y: 14,
      distance: 4.8,
      status: "Saved",
    },
    {
      name: "Seminar Hall",
      category: "Block A",
      location: "Second Floor",
      x: 18,
      y: 6,
      distance: 15.6,
      status: "Reachable",
    },
    {
      name: "Main Entrance",
      category: "Campus Entrance",
      location: "Ground Floor",
      x: 19,
      y: 1,
      distance: 20.2,
      status: "Reachable",
    },
  ];

  return (
    <div className="page-container">
      <LandmarkTable landmarks={landmarks} />
    </div>
  );
}