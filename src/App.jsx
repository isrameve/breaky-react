import FullCenterSection from "./pages/FullCenterSection";
import UserForm from "./components/UserForm/UserForm";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import ButtonToWorking from "./components/ButtonToWorking/ButtonToWorking";
import WorkigTimer from "./components/WorkigTimer/WorkigTimer";
import BreakTimer from "./components/BreakTimer/BreakTimer";
import Button from "./components/Button/Button";

import useLocalStorage from "./hooks/useLocalStorage";
import { useActivityStatus } from "./contexts/ActivityContext";
import { useMenuStatus } from "./contexts/ConfigMenuContext";

const initialUserConfig = {
  name: "",
  age: undefined,
  workTime: undefined,
  breakTime: undefined,
};

function App() {
  const [userProfile] = useLocalStorage("userProfile", initialUserConfig);
  const { activityStatus } = useActivityStatus();
  const { setIsMenuDisplayed, isMenuDisplayed } = useMenuStatus();

  const handleDisplayForm = () => {
    //Controla el cambio de estado del menú
    setIsMenuDisplayed(true);
    console.log(isMenuDisplayed);
  };

  const isUserProfileIncomplete =
    !userProfile.name ||
    userProfile.age === undefined ||
    userProfile.workTime === undefined ||
    userProfile.breakTime === undefined;

  if (isUserProfileIncomplete || isMenuDisplayed) {
    return (
      <FullCenterSection>
        <UserForm />
      </FullCenterSection>
    );
  }

  if (activityStatus === undefined) {
    return (
      <FullCenterSection>
        <ButtonToWorking />
      </FullCenterSection>
    );
  }

  return (
    <div>
      <TopNavBar>
        {/* Cambia el estado del menú, desplegado o no desplegado */}
        <Button label={"Editar"} onClick={handleDisplayForm} />
        {/* Por ahora manejaré un botón cualquiera para pruebas con el Form desplegable */}
      </TopNavBar>
      {/* 
      {activityStatus === undefined ||
        (isMenuDisplayed && (
          <FullCenterSection>
            <UserForm />
          </FullCenterSection>
        ))} */}
      {activityStatus === "working" && !isMenuDisplayed && (
        <FullCenterSection>
          <WorkigTimer timeWorking={userProfile.workTime} />
        </FullCenterSection>
      )}
      {activityStatus === "pausing" && !isMenuDisplayed && (
        <FullCenterSection>
          <BreakTimer breakTime={userProfile.breakTime} />
        </FullCenterSection>
      )}
    </div>
  );
}

export default App;
