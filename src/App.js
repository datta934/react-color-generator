import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Color from "./components/Color";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Color />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
