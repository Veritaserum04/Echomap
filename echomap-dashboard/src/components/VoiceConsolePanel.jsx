import { Mic, MicOff, Volume2, MessageSquare } from "lucide-react";

export default function VoiceConsolePanel({ voice }) {
  return (
    <section className="glass voice-console">
      <div className="panel-header">
        <div>
          <p>VOICE ASSISTANT</p>
          <h2>EchoMap Voice Console</h2>
        </div>

        {voice.listening ? (
          <div className="voice-status active">
            <Mic size={18} />
            Listening
          </div>
        ) : (
          <div className="voice-status">
            <MicOff size={18} />
            Idle
          </div>
        )}
      </div>

      {/* Voice Wave */}
      <div className="wave-container">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="wave-bar"
            style={{
              animationDelay: `${index * 0.05}s`,
            }}
          />
        ))}
      </div>

      {/* Transcript */}
      <div className="transcript-card">
        <span>LIVE TRANSCRIPT</span>

        <h3>{voice.transcript}</h3>
      </div>

      {/* Confidence */}
      <div className="confidence-box">
        <div className="confidence-header">
          <Volume2 size={18} color="#22C55E" />

          Recognition Confidence

          <strong>{voice.confidence}%</strong>
        </div>

        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${voice.confidence}%`,
            }}
          />
        </div>
      </div>

      {/* History */}
      <div>
        <div className="section-title">
          <MessageSquare size={18} color="#A855F7" />

          Recent Voice Commands
        </div>

        <div className="voice-history">
          {voice.history.map((item, index) => (
            <div key={index} className="history-item">
              <MessageSquare size={16} color="#A855F7" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}