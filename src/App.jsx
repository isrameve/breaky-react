import FullCenterSection from "./pages/FullCenterSection";
import UserForm from "./components/UserForm/UserForm";
import WorkigTimer from "./components/WorkigTimer/WorkigTimer";

//Pienso que el estado global que maneja la aparicion y desaparición de las diferentes secciónes correspondientes al momento en el que está la pausa activa, se debe manejar desde aquí.

function App() {
  return (
    <div>
      <UserForm />
      <FullCenterSection>
        <WorkigTimer timeWorking={5} />
      </FullCenterSection>
    </div>
  );
}

export default App;
