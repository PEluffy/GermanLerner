"use client";

import { useState, useEffect } from "react";
import { words as wordsData } from "@/app/words";

interface Word {
  form: string; // der / die / das
  german: string; // Hund
  english: string; // dog
}

export default function Home() {
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [tries, setTries] = useState(3);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<"correct" | "wrong" | "failed" | null>(
    null
  );

  // pick random word AFTER hydration
  useEffect(() => {
    setCurrentWord(wordsData[Math.floor(Math.random() * wordsData.length)]);
  }, []);

  function checkAnswer() {
    if (!currentWord) return;

    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer =
      `${currentWord.form} ${currentWord.german}`.toLowerCase();

    if (userAnswer === correctAnswer) {
      setResult("correct");
      setTries(3);
    } else {
      const remaining = tries - 1;
      setTries(remaining);

      if (remaining <= 0) {
        setResult("failed");
        setAnswer(correctAnswer);
      } else {
        setResult("wrong");
      }
    }
  }

  function reset() {
    setCurrentWord(wordsData[Math.floor(Math.random() * wordsData.length)]);
    setTries(3);
    setAnswer("");
    setResult(null);
  }

  function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
  }

  if (!currentWord) return null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Learn German 🇩🇪
        </h1>

        <div className="text-center mb-6">
          <p className="text-gray-500 text-sm uppercase tracking-wide">
            Translate this word
          </p>
          <p className="text-indigo-600 text-3xl font-bold">
            {currentWord.english}
          </p>
        </div>

        {/* INPUT */}
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
          disabled={tries <= 0 || result === "correct"}
          placeholder="type article + word (e.g. der Hund)"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4
                     focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />

        {/* BUTTONS */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={checkAnswer}
            disabled={tries <= 0 || result === "correct"}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold
                       hover:bg-blue-700 transition-colors
                       disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => speak(`${currentWord.form} ${currentWord.german}`)}
            className="bg-gray-200 hover:bg-gray-300 px-4 rounded-lg text-xl"
            title="Listen"
          >
            🔊
          </button>
        </div>

        {/* FEEDBACK */}
        <div className="text-center min-h-[2rem]">
          {result === "wrong" && (
            <p className="text-orange-600 font-medium">
              ❌ Try again! {tries} attempts left.
            </p>
          )}

          {result === "failed" && (
            <p className="text-red-600 font-medium">
              ❌ Failed. Correct answer:
              <br />
              <span className="font-bold underline">
                {currentWord.form} {currentWord.german}
              </span>
            </p>
          )}

          {result === "correct" && (
            <p className="text-green-600 font-bold text-lg">
              🎉 Correct!
              <br />
              <span className="underline">
                {currentWord.form} {currentWord.german}
              </span>
            </p>
          )}

          {(result === "correct" || result === "failed") && (
            <button
              onClick={reset}
              className="mt-4 w-full text-blue-600 hover:underline"
            >
              Try Another Word
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
