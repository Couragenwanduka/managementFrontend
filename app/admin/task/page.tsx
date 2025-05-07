"use client";
import { useState } from "react";
import { useFormik } from "formik";

const statusOptions = ["To Do", "Started", "In Progress", "Done"] as const;

// Mock user list
const users = ["Alice", "Bob", "Charlie", "David"];

type Task = {
  id: number;
  title: string;
  description: string;
  status: typeof statusOptions[number];
  approved: boolean | null;
  assignedTo: string;
};

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"All" | typeof statusOptions[number]>("All");

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      assignedTo: users[0],
    },
    onSubmit: (values, { resetForm }) => {
      const newTask: Task = {
        id: Date.now(),
        title: values.title,
        description: values.description,
        status: "To Do",
        approved: null,
        assignedTo: values.assignedTo,
      };
      setTasks((prev) => [newTask, ...prev]);
      resetForm();
    },
  });

  const handleApprove = (id: number, approved: boolean) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, approved } : task
      )
    );
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold">Admin Task Manager</h1>

      {/* Task Form */}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold">Post a New Task</h2>

        <input
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          placeholder="Task title"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Task description"
          rows={3}
          className="w-full border p-3 rounded-lg resize-none"
        />

        {/* Assign to user */}
        <select
          name="assignedTo"
          value={formik.values.assignedTo}
          onChange={formik.handleChange}
          className="w-full border p-3 rounded-lg"
        >
          {users.map((user) => (
            <option key={user} value={user}>
              Assign to: {user}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Post Task
        </button>
      </form>

      {/* Filter */}
      <div className="flex space-x-4">
        {["All", ...statusOptions].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as "All" | typeof statusOptions[number])}
            className={`py-2 px-4 rounded-full ${
              filter === status ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded-lg border shadow-sm space-y-2"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{task.title}</h3>
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                {task.status}
              </span>
            </div>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">
              Assigned to: <strong>{task.assignedTo}</strong>
            </p>

            {/* Approval */}
            {task.approved === null ? (
              <div className="flex space-x-2">
                <button
                  onClick={() => handleApprove(task.id, true)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleApprove(task.id, false)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Decline
                </button>
              </div>
            ) : (
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  task.approved ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {task.approved ? "Approved" : "Declined"}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
