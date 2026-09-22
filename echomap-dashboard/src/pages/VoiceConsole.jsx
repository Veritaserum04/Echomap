import VoiceConsolePanel from "../components/VoiceConsolePanel";
import ActiveTimeline from "../components/ActiveTimeline";

export default function VoiceConsole() {
  const voice = {
    listening: true,
    confidence: 96,
    transcript: "Navigate to Computer Lab",
    history: [
      "Start Mapping Mode",
      "Save landmark Faculty Desk",
      "Navigate to Computer Lab",
      "Stop Navigation",
      "Navigate to Library",
    ],
  };

  const events = [
    {
      type: "voice",
      title: "Voice Command Recognized",
      description: "Navigate to Computer Lab",
      time: "Now",
    },
    {
      type: "navigation",
      title: "Navigation Started",
      description: "Route generated successfully.",
      time: "10 sec ago",
    },
    {
      type: "walking",
      title: "User moved forward",
      description: "Voice guidance updated.",
      time: "30 sec ago",
    },
  ];

  return (
    <div className="page-container">
      <VoiceConsolePanel voice={voice} />

      <ActiveTimeline events={events} />
    </div>
  );
}