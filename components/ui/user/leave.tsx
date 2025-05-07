"use client";
import { useState } from "react";

type LeaveStatus = "Pending" | "Approved" | "Rejected";

type LeaveRequest = {
  id: number;
  type: string;
  reason: string;
  startDate: string;
  endDate: string;
  status: LeaveStatus;
};

export default function LeavePage() {
  const [form, setForm] = useState({ type: "", reason: "", startDate: "", endDate: "" });
  const [leaves, setLeaves] = useState<LeaveRequest[]>([]);
  const [filter, setFilter] = useState<LeaveStatus | "All">("All");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newLeave: LeaveRequest = {
      id: Date.now(),
      ...form,
      status: "Pending",
    };
    setLeaves((prev) => [newLeave, ...prev]);
    setForm({ type: "", reason: "", startDate: "", endDate: "" });
  };

  const filteredLeaves = filter === "All" ? leaves : leaves.filter((l) => l.status === filter);

  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Request a Leave</h1>

      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-xl shadow">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
              className="mt-1 border border-gray-300 rounded-lg p-2 w-full focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Leave Type</label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select leave type</option>
            <option value="Sick">Sick Leave</option>
            <option value="Vacation">Vacation</option>
            <option value="Personal">Personal Leave</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reason</label>
          <textarea
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            className="mt-1 border border-gray-300 rounded-lg p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            rows={3}
            placeholder="Explain briefly..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Submit Request
        </button>
      </form>

      <div className="mt-10 mb-4 flex gap-3">
        {["All", "Pending", "Approved", "Rejected"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as LeaveStatus | "All")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
              filter === status
                ? "bg-indigo-100 text-indigo-700 border-indigo-300"
                : "text-gray-600 border-gray-300 hover:bg-gray-100"
            } transition`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredLeaves.length === 0 ? (
          <p className="text-gray-500 text-sm">No leave requests found.</p>
        ) : (
          filteredLeaves.map((leave) => (
            <div
              key={leave.id}
              className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{leave.type} Leave</h3>
                  <p className="text-sm text-gray-500">
                    {leave.startDate} → {leave.endDate}
                  </p>
                  <p className="text-sm mt-2 text-gray-700">{leave.reason}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[leave.status]}`}
                >
                  {leave.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
