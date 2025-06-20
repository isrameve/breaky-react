import FullCenterSection from "./pages/FullCenterSection";
import UserForm from "./components/UserForm/UserForm";
import WorkigTimer from "./components/WorkigTimer/WorkigTimer";
import BreakTimer from "./components/BreakTimer/BreakTimer";

import useLocalStorage from "./hooks/useLocalStorage";
// import { useActivityStatus } from "./contexts/ActivityContext";

//Pienso que el estado global que maneja la aparicion y desaparición de las diferentes secciónes correspondientes al momento en el que está la pausa activa, se debe manejar desde aquí indicando que componente se muetra en ese momento y actualizando el estado desde los componentes que usan el timer

function App() {
  const [userProfile] = useLocalStorage("userProfile");
  // const { activityStatus } = useActivityStatus();

  // console.log(activityStatus);

  return (
    <div>
      <UserForm />
      {/*Usar renderizado Condicional para mostrar/Ocultar completamente el componente según sea el estado global*/}
      <FullCenterSection>
        <WorkigTimer timeWorking={userProfile.workTime} />
      </FullCenterSection>
      <FullCenterSection>
        {/* Pronto tendrán que compartir el contenedor FullCenterSection pero por ahora para poder testear lo hacemos así para que cada secciópn esté separada. Mas adelante ocultarémos cada Card(Timer) según sea necesario */}
        <BreakTimer breakTime={userProfile.breakTime} />
      </FullCenterSection>
    </div>
  );
}

export default App;
