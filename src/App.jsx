import "./styles/main.scss";

import FullCenterSection from "./pages/FullCenterSection";
import ContainerCenter from "./components/ContainerCenter";
import TimerCard from "./components/TimerCard";
import Timer from "./components/Timer";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <FullCenterSection>
        <TimerCard
          classActivity={"activeWorking"}
          optionalClasses="textCentred bgcgray m-top10 centerCard br-10"
        >
          <Timer
            className={"timerWorking"}
            id={"timer"}
            timerPurpose={"Hasta la pausa activa"}
            // initialTime={30}
            onTimerEnd={() => alert("Acabó el tiempo")} //Ejecuta la acción cuando el tiempo llega a su fin
          />

          {/* <ContainerCenter
            className={"containerButtonsTimerOn"}
            id={"container-buttons-timer-on"}
          >
            <Button
              className={"pausaButton"}
              id={"pause-button"}
              label={"Pausa"}
            />
            <Button
              className={"stopButton"}
              id={"stop-button"}
              label={"Terminar"}
            />
          </ContainerCenter> */}
        </TimerCard>
      </FullCenterSection>
    </div>
  );
}

export default App;
