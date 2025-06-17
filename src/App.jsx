import FullCenterSection from "./pages/FullCenterSection";
import UserForm from "./components/UserForm/UserForm";
import WorkigTimer from "./components/WorkigTimer/WorkigTimer";
import BreakTimer from "./components/BreakTimer/BreakTimer";

import useLocalStorage from "./hooks/useLocalStorage";

//Pienso que el estado global que maneja la aparicion y desaparición de las diferentes secciónes correspondientes al momento en el que está la pausa activa, se debe manejar desde aquí.

function App() {
  const [userProfile] = useLocalStorage("userProfile");

  return (
    <div>
      <UserForm />
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
