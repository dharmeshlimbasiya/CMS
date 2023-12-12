import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material";
// import { orange } from "@mui/material/colors";

import Login from "./container/auth/login/Login";
import Signup from "./container/auth/signup/Signup";
import ForgotPassword from "./container/auth/forgot password/ForgotPassword";
import ResetPassword from "./container/auth/reset password/ResetPassword";
import Dashboard from "./container/dashboard/Dashboard";

import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminPage from "./container/pages/AdminPage";
import Profile from "./container/pages/Profile";
import MyAccount from "./container/pages/MyAccount";
import AboutUsPage from "./container/pages/AboutUsPage";
import HelpPage from "./container/pages/HelpPage";
import InboxPage from "./container/pages/mail/InboxPage";
import DraftsPage from "./container/pages/mail/DraftsPage";
import SentPage from "./container/pages/mail/SentPage";
import Table from "./container/datatable/ReusableTable";
import ReusableTable from "./container/datatable/ReusableTable";
import AttendanceReport from "./container/pages/AttendanceReport";
import { ToastContainer } from "react-toastify";
import AttendanceTable from "./container/pages/attendance/AttendanceTable";
import TimeTracker from "./container/pages/timetracker/TimeTracker";
import NotFound from "./container/pages/NotFound";

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Provider store={store}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            /> */}

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/aboutuspage" element={<AboutUsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/drafts" element={<DraftsPage />} />
            <Route path="/sent" element={<SentPage />} />
            <Route path="/table" element={<ReusableTable />} />
            <Route path="/attendance" element={<AttendanceReport />} />
            <Route path="/timer" element={<TimeTracker />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
