import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { AnimatePresence } from "framer-motion";
import { About } from "./pages/about";
import { NotFound } from "./pages/notFound";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
