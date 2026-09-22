import { motion } from "framer-motion";
import { useState } from "react";
import {
  Moon,
  Volume2,
  Wifi,
  MapPinned,
  Bell,
  ShieldCheck,
} from "lucide-react";

export default function SettingsPage() {
  const [voiceFeedback, setVoiceFeedback] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [offlineMode, setOfflineMode] = useState(true);

  const settings = [
    {
      icon: Volume2,
      title: "Voice Guidance",
      description: "Enable spoken navigation instructions.",
      state: voiceFeedback,
      toggle: setVoiceFeedback,
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Receive mapping and navigation alerts.",
      state: notifications,
      toggle: setNotifications,
    },
    {
      icon: Wifi,
      title: "Offline Simulation",
      description: "Use simulated sensor data without Raspberry Pi.",
      state: offlineMode,
      toggle: setOfflineMode,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
          Settings
        </p>

        <h1 className="text-3xl font-bold text-white mt-2">
          Dashboard Preferences
        </h1>
      </div>

      {settings.map((setting) => {
        const Icon = setting.icon;

        return (
          <div
            key={setting.title}
            className="glass rounded-3xl p-5 flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-purple-500/10 p-3">
                <Icon className="text-purple-300" size={22} />
              </div>

              <div>
                <h3 className="text-white font-semibold">{setting.title}</h3>

                <p className="text-sm text-purple-300">
                  {setting.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => setting.toggle(!setting.state)}
              className={`w-14 h-8 rounded-full transition relative ${
                setting.state ? "bg-purple-500" : "bg-gray-700"
              }`}
            >
              <div
                className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                  setting.state ? "left-7" : "left-1"
                }`}
              />
            </button>
          </div>
        );
      })}

      <div className="glass rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-purple-300">
          <MapPinned size={20} />
          Mapping Preferences
        </div>

        <div className="rounded-2xl bg-purple-500/10 p-4">
          <p className="text-white font-medium">Default Mapping Grid Size</p>
          <p className="text-purple-300 mt-1">20 × 20 Occupancy Grid</p>
        </div>

        <div className="rounded-2xl bg-purple-500/10 p-4">
          <p className="text-white font-medium">Landmark Detection Radius</p>
          <p className="text-purple-300 mt-1">1.5 metres</p>
        </div>
      </div>

      <div className="glass rounded-3xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-purple-300">
          <ShieldCheck size={20} />
          Privacy
        </div>

        <p className="text-purple-300">
          EchoMap processes navigation locally and stores landmarks on the device.
        </p>

        <div className="rounded-2xl bg-purple-500/10 p-4 flex items-center gap-3">
          <Moon className="text-purple-300" size={20} />
          <span className="text-white">Dark Theme Enabled</span>
        </div>
      </div>
    </motion.div>
  );
}