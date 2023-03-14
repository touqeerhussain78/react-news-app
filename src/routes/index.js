import { Routes, Route } from "react-router-dom";
import Login from "../views/modules/user/auth/Login";
import Register from "../views/modules/user/auth/Register";
import Home from "../views/modules/user/home";
import AuthGuard from "./AuthGuard";
import ProtectedRoutes from "./ProtectedRoutes";

import UserRoutes from "./user";

function InternalRoutes() {
  return (
    <Routes>
      <Route path="/user" element={<UserRoutes />} />
      <Route path="/login" exact element={<AuthGuard><Login /></AuthGuard>} />
      <Route path="/home" exact element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
      <Route path="/register" exact element={<AuthGuard><Register/></AuthGuard>} />
    </Routes>
  );
}

export default InternalRoutes;
