"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();

const res = await fetch("/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email,
    password,
  }),
});

const data = await res.json();

if (res.ok) {
  router.push("/dashboard");
} else {
  alert(data.message);
}


};

return ( <div className="min-h-screen flex items-center justify-center"> <div className="w-full max-w-md p-6 shadow-lg rounded-lg"> <h1 className="text-2xl font-bold mb-6 text-center">
Login </h1>

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  </div>
</div>


);
}
