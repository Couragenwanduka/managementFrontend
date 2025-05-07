"use client";
import { useFormik } from "formik";
import { useState } from "react";

type Role = "Admin" | "Staff" | "User";

type User = {
  id: number;
  name: string;
  email: string;
  role: Role;
};

const roles: Role[] = ["Admin", "Staff", "User"];

export default function AdminUserPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"add" | "list">("add");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "User" as Role,
    },
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      if (editingUserId) {
        setUsers((prev) =>
          prev.map((u) => (u.id === editingUserId ? { ...u, ...values } : u))
        );
        setEditingUserId(null);
      } else {
        const newUser: User = {
          id: Date.now(),
          ...values,
        };
        setUsers((prev) => [newUser, ...prev]);
      }
      resetForm();
      setActiveTab("list");
    },
  });

  const handleEdit = (user: User) => {
    formik.setValues({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    setEditingUserId(user.id);
    setActiveTab("add");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setActiveTab("add");
            formik.resetForm();
            setEditingUserId(null);
          }}
          className={`px-4 py-2 rounded ${
            activeTab === "add" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {editingUserId ? "Edit User" : "Add User"}
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={`px-4 py-2 rounded ${
            activeTab === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Manage Users
        </button>
      </div>

      {/* Add/Edit User Form */}
      {activeTab === "add" && (
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white p-6 rounded-xl shadow space-y-4"
        >
          <h2 className="text-xl font-semibold">
            {editingUserId ? "Edit User" : "Add New User"}
          </h2>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Full name"
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email address"
            className="w-full border p-3 rounded-lg"
          />
          <select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            className="w-full border p-3 rounded-lg"
          >
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {editingUserId ? "Update User" : "Add User"}
          </button>
        </form>
      )}

      {/* Users Table */}
      {activeTab === "list" && (
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                    No users available.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.role}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
