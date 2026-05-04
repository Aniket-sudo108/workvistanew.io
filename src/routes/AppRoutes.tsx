import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import MasterUsers from "../pages/MasterUsers";
import MasterData from "../pages/MasterData";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard layout wrapper */}
        <Route path="/" element={<DashboardLayout />}>
          
          <Route index element={<Dashboard />} />
          <Route path="master-users" element={<MasterUsers />} />
          <Route path="master-data" element={<MasterData />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;