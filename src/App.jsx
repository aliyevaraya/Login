import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthRoute from "./utils/AuthRoute";
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  return (
    <div>
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
    </div>
  );
}

export default App;
