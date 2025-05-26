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
            timerUp={"Hasta la pausa activa"}
          />

          <ContainerCenter
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
          </ContainerCenter>
        </TimerCard>
      </FullCenterSection>
    </div>
  );
}

export default App;
