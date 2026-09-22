import { useEffect, useState } from "react";
import { connectWebSocket } from "../services/websocket";

export default function useEchoMapSocket() {
  const [liveData, setLiveData] = useState({
    connected: false,
    sensors: null,
    mapping: null,
    navigation: null,
    notifications: null,
    system: null,
  });

  useEffect(() => {
    const socket = connectWebSocket(
      (message) => {
        setLiveData((prev) => ({
          ...prev,
          ...message,
          connected: true,
        }));
      },
      (status) => {
        setLiveData((prev) => ({
          ...prev,
          connected: status,
        }));
      }
    );

    return () => socket?.close();
  }, []);

  return liveData;
}