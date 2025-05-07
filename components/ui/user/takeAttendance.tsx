"use client";
import { useState } from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const AttendanceAction = () => {
  type StatusType = "Not Clocked In" | "Present" | "Clocked Out";
  const [status, setStatus] = useState<StatusType>("Not Clocked In");
  const [time, setTime] = useState("");

  const handleClockIn = () => {
    const now = new Date().toLocaleTimeString();
    setStatus("Present");
    setTime(now);
  };

  const handleClockOut = () => {
    const now = new Date().toLocaleTimeString();
    setStatus("Clocked Out");
    setTime(now);
  };

  const statusColor = {
    "Not Clocked In": "bg-gray-100 text-gray-500",
    "Present": "bg-green-100 text-green-700",
    "Clocked Out": "bg-red-100 text-red-700"
  };

  const statusIcon = {
    "Not Clocked In": <Clock className="w-5 h-5" />,
    "Present": <CheckCircle className="w-5 h-5 text-green-600" />,
    "Clocked Out": <XCircle className="w-5 h-5 text-red-600" />
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-[97%] space-y-4 animate-fade-in mt-10">
      <h2 className="text-xl font-semibold text-primary">Attendance</h2>

      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl ${statusColor[status]}`}>
        {statusIcon[status]}
        <div>
          <p className="text-sm font-medium">Status: {status}</p>
          {time && <p className="text-xs">Time: {time}</p>}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleClockIn}
          className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Clock In
        </button>
        <button
          onClick={handleClockOut}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Clock Out
        </button>
      </div>
    </div>
  );
};

export default AttendanceAction;
