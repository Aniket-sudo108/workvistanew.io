import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Bar */}
        <header className="h-16 bg-white shadow flex items-center px-6">
          
          {/* Mobile menu button */}
          <button
            className="md:hidden mr-4 text-gray-700"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
        </header>

        {/* Page Content */}
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;