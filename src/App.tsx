import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
