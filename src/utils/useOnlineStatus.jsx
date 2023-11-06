import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnelineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);

  return isOnelineStatus;
};

export default useOnlineStatus;
