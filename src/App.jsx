import FullCenterSection from "./pages/FullCenterSection";
import WorkigTimer from "./components/WorkigTimer/WorkigTimer";

function App() {
  return (
    <div>
      <FullCenterSection>
        <WorkigTimer timeWorking={5} />
      </FullCenterSection>
    </div>
  );
}

export default App;
