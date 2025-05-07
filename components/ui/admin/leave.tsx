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
  const isAdmin = true; // Replace with actual admin check
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

  const handleStatusChange = (id: number, newStatus: LeaveStatus) => {
    setLeaves((prev) =>
      prev.map((leave) =>
        leave.id === id ? { ...leave, status: newStatus } : leave
      )
    );
  };

  const filteredLeaves = filter === "All" ? leaves : leaves.filter((l) => l.status === filter);

  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {!isAdmin && (
        <>
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">Request a Leave</h1>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-xl shadow">
            {/* Form fields (same as before) */}
            {/* ... */}
          </form>
        </>
      )}

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

              {isAdmin && leave.status === "Pending" && (
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => handleStatusChange(leave.id, "Approved")}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(leave.id, "Rejected")}
                    className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
