// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TasksPage } from "./pages/TasksPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="tasks"
        element={
          <PrivateRoute
            redirectTo="/login"
            component={<TasksPage />}
          />
        }
      />
    </Route>
  </Routes>
);

