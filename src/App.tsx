import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Cursor } from "./components/cursor";

const devMode = process.env.NODE_ENV === "development";

function App() {
  return !devMode ? (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-darkGrey p-[50px]">
      <span className="text-[36px]">website under maintain</span>
      <img className="w-[300px]" src="https://i.imgur.com/FPiWKbx.gif" alt="gif" />
    </div>
  ) : (
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
