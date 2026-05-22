import Sidebar from "@/components/sidebar/Sidebar";
import StatCard from "@/components/cards/StatCard";

export default function ClientDashboard() {
  return (
    <main className="flex min-h-screen bg-[#111111] text-white">

      <Sidebar />

      <section className="flex-1 p-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">
            Welcome, Alex 👋
          </h1>

          <p className="text-gray-400">
            Here’s what’s happening with your projects.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-10">

          <StatCard
            title="Total Bookings"
            value="8"
          />

          <StatCard
            title="Active Projects"
            value="3"
          />

          <StatCard
            title="Wallet Balance"
            value="ETB 12,450"
          />

        </div>

        <div className="glass rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Bookings
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between glass p-4 rounded-xl">
              <span>Wedding Photography</span>

              <span className="text-green-400">
                In Progress
              </span>
            </div>

            <div className="flex justify-between glass p-4 rounded-xl">
              <span>Logo Design</span>

              <span className="text-yellow-400">
                Pending
              </span>
            </div>

            <div className="flex justify-between glass p-4 rounded-xl">
              <span>Music Video Editing</span>

              <span className="text-purple-400">
                Completed
              </span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}