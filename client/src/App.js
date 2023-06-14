import "./App.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import WatchPage from "./pages/watch/WatchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watch" element={<WatchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
