import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        AI Skill Gap Analyzer
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Helping students identify skill gaps and discover opportunities.
      </p>

     <div className="mt-6 flex gap-4">
  <Link
    href="/register"
    className="bg-blue-500 text-white px-6 py-2 rounded"
  >
    Register
  </Link>

  <Link
    href="/login"
    className="bg-green-500 text-white px-6 py-2 rounded"
  >
    Login
  </Link>
</div>
    </main>
  );
}