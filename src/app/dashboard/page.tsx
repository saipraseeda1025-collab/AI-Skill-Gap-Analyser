"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.replace("/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/login");
  };

  // Prevent dashboard content from flashing
  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">
          Checking authentication...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-600">
            🎉 Login Successful!
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-lg">
            Welcome to the AI Skill Gap Analyzer Dashboard.
          </p>

          <div className="border p-4 rounded bg-green-50">
            <h2 className="font-semibold">
              Authentication Status
            </h2>
            <p>✅ User Logged In</p>
            <p>✅ Dashboard Protected</p>
            <p>✅ Logout Working</p>
          </div>

          <div className="border p-4 rounded bg-blue-50">
            <h2 className="font-semibold">
              Next Milestone
            </h2>
            <ul className="list-disc ml-6">
              <li>Add Skills</li>
              <li>Add CGPA</li>
              <li>Add Projects</li>
              <li>Add Certifications</li>
              <li>Add Career Interests</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}