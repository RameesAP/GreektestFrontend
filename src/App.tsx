import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const userData = localStorage.getItem("userData");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={userData ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/signup"
          element={userData ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
