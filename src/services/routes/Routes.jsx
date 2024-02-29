/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import { MagicButtonPage } from "../../pages/MagicButtonPage/MagicButton";
import { CalendarPage } from "../../pages/CalendarPage/CalendarPage";
import { NotFound } from "../../pages/NotFound/NotFound";
import { ProtectedRoute } from "../protectedRoute/protectedRoute";
import { LoginPage } from "../../pages/LoginPage/LoginPage";

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>}/>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MagicButtonPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
