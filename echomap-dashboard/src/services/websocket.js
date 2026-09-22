let socket = null;

export function connectWebSocket(onMessage, onStatus) {
  if (socket) return socket;

  try {
    socket = new WebSocket("ws://127.0.0.1:8000/ws/live");

    socket.onopen = () => {
      console.log("EchoMap WebSocket Connected");
      onStatus(true);
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        onMessage(data);
      } catch (error) {
        console.error("Invalid WebSocket message", error);
      }
    };

    socket.onerror = () => {
      console.log("Backend not connected. Using simulation mode.");
      onStatus(false);
    };

    socket.onclose = () => {
      onStatus(false);
      socket = null;
    };

    return socket;
  } catch (error) {
    console.log("Simulation mode enabled.");
    onStatus(false);
    return null;
  }
}