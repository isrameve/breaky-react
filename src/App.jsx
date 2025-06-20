import FullCenterSection from "./pages/FullCenterSection";
import UserForm from "./components/UserForm/UserForm";
import WorkigTimer from "./components/WorkigTimer/WorkigTimer";
import BreakTimer from "./components/BreakTimer/BreakTimer";

import useLocalStorage from "./hooks/useLocalStorage";
import { useActivityStatus } from "./contexts/ActivityContext";

function App() {
  const [userProfile] = useLocalStorage("userProfile");
  const { activityStatus } = useActivityStatus();

  return (
    <div>
      <UserForm />
      {activityStatus === "working" && (
        <FullCenterSection>
          <WorkigTimer timeWorking={userProfile.workTime} />
        </FullCenterSection>
      )}

      {activityStatus === "pausing" && (
        <FullCenterSection>
          <BreakTimer breakTime={userProfile.breakTime} />
        </FullCenterSection>
      )}
    </div>
  );
}

export default App;
