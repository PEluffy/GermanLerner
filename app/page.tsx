// "use client";

import Link from "next/link";

// import { useState, useEffect } from "react";
// import { verbs as verbsData } from "@/app/verb";

// interface Verb {
//   english: string;
//   german: string;
//   example: string;
// }

// export default function Home() {
//   const [currentVerb, setCurrentVerb] = useState<Verb>(verbsData[0] || null);
//   useEffect(() => {
//     setCurrentVerb(verbsData[Math.floor(Math.random() * verbsData.length)]);
//   }, []);
//   const [tries, setTries] = useState(3);
//   const [answer, setAnswer] = useState("");
//   const [result, setResult] = useState<"correct" | "wrong" | "failed" | null>(
//     null
//   );

//   function checkAnswer() {
//     const isCorrect = answer.trim().toLowerCase() === currentVerb?.german;

//     if (isCorrect) {
//       setResult("correct");
//       setTries(3);
//     } else {
//       const remainingTries = tries - 1;
//       setTries(remainingTries);
//       if (remainingTries <= 0) {
//         setResult("failed");
//         setAnswer(currentVerb.german);
//       } else {
//         setResult("wrong");
//       }
//     }
//   }
//   function reset() {
//     setCurrentVerb(verbsData[Math.floor(Math.random() * verbsData.length)]);
//     setTries(3);
//     setAnswer("");
//     setResult(null);
//   }

//   function speak(word: string) {
//     const utterance = new SpeechSynthesisUtterance(word);
//     utterance.lang = "de-DE"; // German pronunciation
//     speechSynthesis.speak(utterance);
//   }

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Learn German 🇩🇪
//         </h1>

//         <div className="text-center mb-6">
//           <p className="text-gray-500 text-sm uppercase tracking-wide">
//             Translate this word:
//           </p>
//           <p className="text-indigo-600 text-3xl font-bold">
//             {currentVerb?.english}
//           </p>
//         </div>

//         <div className="w-full flex items-center gap-2 mb-4">
//           <input
//             type="text"
//             value={answer}
//             onChange={(e) => setAnswer(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
//             disabled={tries <= 0 || result === "correct"}
//             placeholder="type your german word here"
//             className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
//           />
//           <button
//             type="button"
//             onClick={() => speak(answer)}
//             className="bg-gray-200 hover:bg-gray-300 px-4 py-3 rounded-lg transition-colors text-xl"
//             title="Listen"
//           >
//             🔊
//           </button>
//         </div>

//         <button
//           disabled={tries <= 0 || result === "correct"}
//           onClick={checkAnswer}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           Submit
//         </button>

//         <div className="mt-6 text-center min-h-[1.5rem]">
//           {result === "wrong" && (
//             <p className="text-orange-600 font-medium">
//               ❌ Keep trying! {tries} attempts left.
//             </p>
//           )}

//           {result === "failed" && (
//             <p className="text-red-600 font-medium">
//               ❌ {result}. The answer was{" "}
//               <span className="underline">{currentVerb?.german}</span>.
//             </p>
//           )}

//           {result === "correct" && (
//             <p className="text-green-600 font-bold text-lg">
//               🎉 {result}! Well done.
//             </p>
//           )}

//           {(result === "correct" || result === "failed") && (
//             <button
//               onClick={reset}
//               className="mt-4 w-full text-blue-600 hover:underline"
//             >
//               Try Another Word
//             </button>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          German Practice 🇩🇪
        </h1>

        <div className="flex flex-col gap-4">
          <Link
            href="/verbs"
            className="block rounded-xl bg-indigo-600 px-6 py-3 text-white font-medium text-lg
                       hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Practice Verbs
          </Link>

          <Link
            href="/words"
            className="block rounded-xl bg-blue-600 px-6 py-3 text-white font-medium text-lg
                       hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Practice Words
          </Link>
        </div>
      </div>
    </main>
  );
}
