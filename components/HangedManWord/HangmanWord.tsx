import { HangmanWordProps } from "@/interfaces/HangmanWord/HangmanWord";

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {

  return (
    <div className="flex gap-1 md:text-8xl text-7xl font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <div className="border-b-8 border-solid border-[#1e3538]"
         key={`${wordToGuess}-${index}`}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "#1e3538",
            }}
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  )
}
