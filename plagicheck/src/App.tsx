import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import PlagiarismChecker from "./components/dashboard/PlagiarismChecker.tsx";
import AcademicDivision from "./components/dashboard/AcademicDivision.tsx";
import Archive from "./components/dashboard/Archive.tsx";
import ManageStudents from "./components/dashboard/ManageUsers.tsx";
import AccountSettings from "./components/dashboard/AccountSettings.tsx";
import { DashboardLayout } from "./routes/DashboardLayout.tsx";
import TestLogin from "./components/commons/TestLogin.tsx";
import DashboardProtectedRoute from "./routes/protectedRoutes/DashboardProtectedRoute.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<TestLogin />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardProtectedRoute>
              <DashboardLayout />
            </DashboardProtectedRoute>
          }
        >
          <Route path="" index element={<DashboardPage />} />
          <Route path="plagiarism-checker" element={<PlagiarismChecker />} />
          <Route path="academic-division" element={<AcademicDivision />} />
          <Route path="archive" element={<Archive />} />
          <Route path="manage-users" element={<ManageStudents />} />
          <Route path="account-settings" element={<AccountSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
