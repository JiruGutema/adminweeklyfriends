import WeeklyPairing from "./Components/WeeklyFriends/WeeklyFriends";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <WeeklyPairing apiUrl="https://web-weekly-friends-generator.onrender.com" />
            }
          />
        </Routes>
      </Router>
      <div className="maintanier">
        Developed by:{" "}
        <span>
          {" "}
          <a href="https://t.me/@jethior">Systemd</a>
        </span>{" "}
      </div>
    </>
  );
}

export default App;
