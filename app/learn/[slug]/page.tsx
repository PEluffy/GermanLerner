import Link from "next/link";
import { verbs } from "@/app/verb";
import { words } from "@/app/words";
import { Speaker } from "@/app/componenets/speaker";

export default async function LearnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const isVerbs = slug === "verbs";
  const isWords = slug === "words";

  console.log(isVerbs, isWords);

  if (!isVerbs && !isWords) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4">404</h1>
          <p className="text-gray-600 mb-4">Page not found</p>
          <Link href="/" className="text-blue-600 hover:underline">
            Go Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {slug === "verbs" ? (
            <>
              <th className="px-4 py-2 border-b">English</th>
              <th className="px-4 py-2 border-b">German</th>
              <th className="px-4 py-2 border-b">Example</th>
              <th className="px-4 py-2 border-b text-center">Listen</th>
            </>
          ) : (
            <>
              <th className="px-4 py-2 border-b">Article</th>
              <th className="px-4 py-2 border-b">German</th>
              <th className="px-4 py-2 border-b">English</th>
              <th className="px-4 py-2 border-b text-center">Listen</th>
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {(slug === "verbs" ? verbs : words).map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-50 transition-colors cursor-default"
          >
            {slug === "verbs" ? (
              <>
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.english}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.german}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.example || "-"}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-center"></td>
              </>
            ) : (
              <>
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.form}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.german}
                </td>
                <td className="px-4 py-2 border-b border-gray-200">
                  {item.english}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-center"></td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* CARD COMPONENT */
function LearningCard({
  title,
  description,
  href,
  emoji,
}: {
  title: string;
  description: string;
  href: string;
  emoji: string;
}) {
  return (
    <Link href={href}>
      <div className="cursor-pointer border rounded-lg p-6 hover:shadow-lg transition-all">
        <div className="text-3xl mb-2">{emoji}</div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
