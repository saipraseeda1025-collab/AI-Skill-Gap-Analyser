export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        AI Skill Gap Analyzer
      </h1>

      <p className="text-lg text-center max-w-2xl mb-8">
        Helping students identify skill gaps, discover opportunities,
        and improve career readiness through AI-powered recommendations.
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Login
        </a>

        <a
          href="/register"
          className="px-6 py-3 border rounded-lg"
        >
          Register
        </a>
      </div>
    </main>
  );
}