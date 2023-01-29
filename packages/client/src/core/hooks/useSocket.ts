import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

import { tokenAtom } from "@/store/token.store";

const useSocket = (url: string) => {
  const token = useAtomValue(tokenAtom);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    return () => {
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (token) {
      setSocket(
        io(url, {
          autoConnect: false,
          auth: { token },
          transports: ["websocket"],
        })
      );
    }
  }, [token]);

  useEffect(() => {
    if (socket && !socket.connected) {
      socket.connect();
    }
  }, [socket]);

  return socket;
};

export default useSocket;
