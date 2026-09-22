import { ShieldCheck } from "lucide-react";

export default function ConfidenceMeter({
  confidence = 91,
}) {
  const circumference = 2 * Math.PI * 60;
  const offset =
    circumference - (confidence / 100) * circumference;

  return (
    <section className="glass confidence-meter">
      <div className="confidence-header">
        <ShieldCheck size={22} color="#A855F7" />

        <h3>Navigation Confidence</h3>
      </div>

      <div className="confidence-circle">
        <svg width="160" height="160">
          <circle
            cx="80"
            cy="80"
            r="60"
            stroke="#2A1538"
            strokeWidth="10"
            fill="none"
          />

          <circle
            cx="80"
            cy="80"
            r="60"
            stroke="#A855F7"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 80 80)"
          />
        </svg>

        <div className="confidence-value">
          <h2>{confidence}%</h2>

          <span>Confidence</span>
        </div>
      </div>

      <p className="confidence-text">
        EchoMap currently has a high confidence level for indoor
        navigation based on ultrasonic sensor readings and landmark
        mapping.
      </p>
    </section>
  );
}