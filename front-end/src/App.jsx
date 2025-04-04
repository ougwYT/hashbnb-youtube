import Header from "./components/Header";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Resgister from "./components/pages/Register";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} user={user} />}
        />
        <Route path="/resgister" element={<Resgister setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
