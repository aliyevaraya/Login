import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthRoute from "./routers/AuthRoute";
import PrivateRoute from "./routers/PrivateRoute";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute user={user} />}>
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Route>
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
