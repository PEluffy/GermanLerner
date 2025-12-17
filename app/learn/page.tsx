import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* VERBS CARD */}
        <Link href="learn/verbs">
          <div
            className="cursor-pointer bg-white rounded-xl shadow-md p-8
                          hover:shadow-xl transition-all border border-gray-200"
          >
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Learn Verbs
            </h2>
            <p className="text-gray-600">
              Practice German verbs with examples and translations.
            </p>
          </div>
        </Link>

        {/* WORDS CARD */}
        <Link href="learn/words">
          <div
            className="cursor-pointer bg-white rounded-xl shadow-md p-8
                          hover:shadow-xl transition-all border border-gray-200"
          >
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Learn Words
            </h2>
            <p className="text-gray-600">
              Learn nouns with articles (der / die / das).
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
