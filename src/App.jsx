import FullCenterSection from "./pages/FullCenterSection";
import UserForm from "./components/UserForm/UserForm";
import ButtonToWorking from "./components/ButtonToWorking/ButtonToWorking";
import WorkigTimer from "./components/WorkigTimer/WorkigTimer";
import BreakTimer from "./components/BreakTimer/BreakTimer";

import useLocalStorage from "./hooks/useLocalStorage";
import { useActivityStatus } from "./contexts/ActivityContext";

function App() {
  const [userProfile] = useLocalStorage("userProfile");
  const { activityStatus } = useActivityStatus();

  if (activityStatus === undefined && localStorage.length > 0) {
    //Esto tiene fallas a largo plazo, ya que si tengo otros elementos en el local mas adelante, podrían crear un comflicto
    return (
      <FullCenterSection>
        <ButtonToWorking />
      </FullCenterSection>
    );
  }

  return (
    <div>
      {activityStatus === undefined && (
        <FullCenterSection>
          <UserForm />
        </FullCenterSection>
      )}

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
