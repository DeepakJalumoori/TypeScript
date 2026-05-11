import "./App.css";
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
      <div>
        <h1>React With TypeScript</h1>
        <Profile name="Sameer" age={20} />
        <Profile name="Karthikeya" age={21} />
      </div>
    </>
  );
}

export default App;
