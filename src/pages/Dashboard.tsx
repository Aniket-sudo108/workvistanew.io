const Dashboard = () => {
  return (
    <div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500">Total Users</h3>
          <p className="text-3xl font-bold text-indigo-600">1,250</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500">Active Sessions</h3>
          <p className="text-3xl font-bold text-green-600">320</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-3xl font-bold text-blue-600">$12,400</p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;