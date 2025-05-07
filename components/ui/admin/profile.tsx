/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useFormik } from "formik";
import { useSession } from "next-auth/react"; // or any auth context you're using

// Extend the Session type to include the role property
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string; // Add the role property
    };
  }
}
import { useState } from "react";

// Props: isAdmin determines if current user is admin,
// profileUser is the user being edited
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProfilePage({ profileUser }: { profileUser: any }) {
  const { data: session } = useSession();
  const currentUser = session?.user;

  const isSelf = profileUser.email === currentUser?.email;
  const isAdmin = currentUser?.role === "admin";

  const canEdit = isSelf || isAdmin;

  const [initialValues, setInitialValues] = useState({
    fullName: profileUser?.fullName || "",
    email: profileUser?.email || "",
    phone: profileUser?.phone || "",
    address: profileUser?.address || "",
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      if (canEdit) {
        alert("Profile updated!");
        console.log("Updated profile:", values);
        // You can trigger an API call here to update the user info
      }
    },
  });

  return (
    <div className="max-w-3xl mx-auto p-6 h-screen bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300 space-y-8">
      {/* Profile Header */}
      <div className="flex items-center space-x-6 bg-white p-4 rounded-lg shadow-lg">
        <div className="w-24 h-24 rounded-full bg-[--color-border] flex items-center justify-center text-xl font-bold text-[--color-muted] overflow-hidden">
          <img src="/profile-pic.jpg" alt="Profile Picture" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-[--color-primary]">{formik.values.fullName}</h1>
          <p className="text-sm text-[--color-muted]">{isAdmin ? "Administrator" : "Employee"}</p>
        </div>
      </div>

      {/* Profile Form */}
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
      >
        <h2 className="text-xl font-semibold text-[--color-accent]">
          {isSelf ? "Edit Your Profile" : `Edit ${profileUser.fullName}'s Profile`}
        </h2>

        <div className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center space-x-3">
            <span className="text-[--color-muted]">👤</span>
            <input
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              disabled={!canEdit}
              className={`w-full p-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 ${
                canEdit ? "focus:ring-[--color-primary]" : "bg-gray-100 cursor-not-allowed"
              }`}
              placeholder="Full Name"
            />
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <span className="text-[--color-muted]">📧</span>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              disabled
              className="w-full p-3 border border-[--color-border] rounded-lg bg-gray-100 cursor-not-allowed"
              placeholder="Email"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <span className="text-[--color-muted]">📱</span>
            <input
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              disabled={!canEdit}
              className={`w-full p-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 ${
                canEdit ? "focus:ring-[--color-primary]" : "bg-gray-100 cursor-not-allowed"
              }`}
              placeholder="Phone Number"
            />
          </div>

          {/* Address */}
          <div className="flex items-center space-x-3">
            <span className="text-[--color-muted]">🏠</span>
            <textarea
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              disabled={!canEdit}
              className={`w-full p-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 resize-none ${
                canEdit ? "focus:ring-[--color-primary]" : "bg-gray-100 cursor-not-allowed"
              }`}
              placeholder="Address"
              rows={3}
            />
          </div>
        </div>

        {canEdit && (
          <button
            type="submit"
            className="w-full bg-[--color-primary] text-white px-4 py-3 rounded-lg hover:bg-[--color-accent] transition-all duration-300 ease-in-out"
          >
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
}
