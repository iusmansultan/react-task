import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Countdown />
    </div>
  );
}

export default App;

const Countdown = () => {
  return (
    <div className="container">
      <div>
        Countdown:
        <span>{" place for countdown"}</span>
      </div>

      <InputCount />

      <PauseResumeButton />

      <CancelButton />
    </div>
  );
};

const InputCount = () => {
  return <input placeholder="Please set time" />;
};

const PauseResumeButton = () => {
  return <button>Start</button>;
};

const CancelButton = () => {
  return <button>Cancel</button>;
};
