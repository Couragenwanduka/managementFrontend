"use client";
import { useFormik } from "formik";

export default function ProfilePage() {
  const formik = useFormik({
    initialValues: {
      fullName: "Courage Nduka",
      email: "courage@example.com",
      phone: "+2348123456789",
      address: "Lagos, Nigeria",
    },
    onSubmit: (values) => {
      alert("Profile updated!");
      console.log("Updated profile:", values);
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
          <p className="text-sm text-[--color-muted]">Employee</p>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
        <h2 className="text-xl font-semibold text-[--color-accent]">Edit Profile</h2>

        <div className="space-y-4">
          {/* Full Name */}
          <div className="flex items-center space-x-3">
            <span className="text-[--color-muted]">👤</span>
            <input
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              className="w-full p-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
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

          {/* Phone Number */}
          <div className="flex items-center space-x-3">
            <span className="text-[--color-muted]">📱</span>
            <input
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              className="w-full p-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
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
              className="w-full p-3 border border-[--color-border] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary] resize-none"
              placeholder="Address"
              rows={3}
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full bg-[--color-primary] text-white px-4 py-3 rounded-lg hover:bg-[--color-accent] transition-all duration-300 ease-in-out"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
