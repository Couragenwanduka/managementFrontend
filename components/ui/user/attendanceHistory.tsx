"use client";
import React from "react";

const userAttendance = [
  { date: "2025-05-01", status: "Present", timeIn: "09:02 AM" },
  { date: "2025-05-02", status: "Late", timeIn: "09:20 AM" },
  { date: "2025-05-03", status: "Absent", timeIn: "--" },
];

const AttendanceHistory = () => {
  return (
    <main className="mt-6 w-[97%]">
      <h1 className="text-2xl font-bold mb-6">My Attendance</h1>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-green-100 text-green-800 p-4 rounded-xl font-semibold">
          Present: 18 days
        </div>
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl font-semibold">
          Late: 3 days
        </div>
        <div className="bg-red-100 text-red-800 p-4 rounded-xl font-semibold">
          Absent: 2 days
        </div>
      </div>

      {/* Recent Logs */}
      <div className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-lg font-bold mb-4">Recent Attendance</h2>
        <ul className="divide-y text-sm">
          {userAttendance.map((entry, i) => (
            <li key={i} className="w-full h-14 flex justify-between items-center">
              <span className="w-[50%]">{entry.date}</span>
              <div className="w-[50%]">
                <span
                    className={`px-2 py-1 rounded-full ${
                    entry.status === "Present"
                        ? "bg-green-100 text-green-800"
                        : entry.status === "Late"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                >
                    {entry.status}
                </span>
              </div>
              <span className="w-[10%]">{entry.timeIn}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AttendanceHistory;
