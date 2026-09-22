import { motion } from "framer-motion";
import {
  ScanSearch,
  Navigation,
  MapPinned,
  Mic,
} from "lucide-react";

const MODES = [
  {
    key: "DISCOVERY",
    title: "Discovery Mode",
    icon: ScanSearch,
    description: "Detect nearby obstacles using ultrasonic sensors.",
  },
  {
    key: "MAPPING",
    title: "Mapping Mode",
    icon: MapPinned,
    description: "Generate indoor occupancy maps and save landmarks.",
  },
  {
    key: "NAVIGATION",
    title: "Navigation Mode",
    icon: Navigation,
    description: "Navigate to saved landmarks using voice guidance.",
  },
  {
    key: "VOICE",
    title: "Voice Console",
    icon: Mic,
    description: "Voice recognition and spoken navigation assistant.",
  },
];

export default function ModeCards({ activeMode }) {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
      {MODES.map((mode, index) => {
        const Icon = mode.icon;
        const active = mode.key === activeMode;

        return (
          <motion.div
            key={mode.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className={`rounded-[28px] p-6 transition-all ${
              active
                ? "bg-gradient-to-br from-purple-600/30 to-cyan-500/10 border border-purple-400 shadow-purple"
                : "glass"
            }`}
          >
            <div className="rounded-2xl bg-purple-500/10 p-3 w-fit">
              <Icon className="text-purple-300" size={24} />
            </div>

            <h3 className="text-white font-semibold mt-5 text-lg">
              {mode.title}
            </h3>

            <p className="text-purple-300 text-sm mt-3 leading-6">
              {mode.description}
            </p>

            <div className="mt-5">
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  active
                    ? "bg-green-500/20 text-green-300"
                    : "bg-purple-500/10 text-purple-300"
                }`}
              >
                {active ? "ACTIVE MODE" : "AVAILABLE"}
              </span>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}