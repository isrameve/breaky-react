import { createContext, useContext, useState } from "react";

const ActivityContext = createContext(null);

export const useActivityStatus = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error(
      "useActivityStatus must be used within an ActivityProvider"
    );
  }
  return context;
};

export const ActivityProvider = ({ children }) => {
  const [activityStatus, setActivityStatus] = useState(undefined);

  const toggleActivityStatus = () => {
    setActivityStatus((prevStatus) =>
      prevStatus === "working" ? "pausing" : "working"
    );
  };

  const isWorking = activityStatus === "working";
  const isPausing = activityStatus === "pausing";

  const value = {
    activityStatus,
    setActivityStatus,
    toggleActivityStatus,
    isWorking,
    isPausing,
  };

  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
};
