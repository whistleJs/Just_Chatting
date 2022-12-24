import { useEffect } from "react";
import io from "socket.io-client";

const SocketPage = () => {
  useEffect(() => {
    io("ws://localhost:8000", {
      transports: ["websocket"],
    }).on("connect", () => {
      console.log("connect");
    });
  }, []);

  return <div>socket</div>;
};

export default SocketPage;
