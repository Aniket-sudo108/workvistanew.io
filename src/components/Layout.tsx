import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 bg-gray-100">
        {/* Top bar */}
        <div className="h-16 bg-white shadow flex items-center px-4">
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;