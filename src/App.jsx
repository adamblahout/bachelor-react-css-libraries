import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
