import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const linkClass = ({ isActive }: any) =>
    `block px-4 py-2 rounded transition ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <>
      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo + Close */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
          <div className="text-xl font-bold">My Admin</div>

          {/* Close button (mobile only) */}
          <button
            className="md:hidden text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-2">
          <NavLink to="/" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/master-users" className={linkClass}>
            Master Users
          </NavLink>

          <NavLink to="/master-data" className={linkClass}>
            Master Data
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-gray-400 border-t border-gray-800">
          © 2026 My Company
        </div>
      </div>
    </>
  );
};

export default Sidebar;