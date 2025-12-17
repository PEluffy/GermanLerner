export function Speaker({ word }: { word: string }) {
  return (
    <button
      onClick={() => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = "de-DE";
        speechSynthesis.speak(utterance);
      }}
      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
      title="Listen"
    >
      🔊
    </button>
  );
}
