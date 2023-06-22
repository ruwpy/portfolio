import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Cursor } from "./components/cursor";

function App() {
  return (
    <Router>
      <Cursor />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
