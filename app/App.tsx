"use client"

import { useCallback, useEffect, useState } from "react"
import { HangmanDrawing } from "@/components/HangedManDrawing/HangmanDrawing"
import { HangmanWord } from "@/components/HangedManWord/HangmanWord"
import { Keyboard } from "@/components/KeyBoard/Keyboard"
import words  from '@/components/words/wordList.json'
import { Message } from "@/components/Message/Message"


// Get a random Word from array
function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState('example') 
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  // Incorrect letters is the letters in 'guessedLetters'
  // that are not present in wordToGuess
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  // If the incorrectLetters length is >= 6 game is over
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))

  // If the letter hasn't been guessed yet and the game is still in progress,
  // update guessedLetters by adding a new letter  
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser]
  )

  //Listens to keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [addGuessedLetter, guessedLetters])

  // Set new word to Gues, listens to keyboard
  useEffect(() => {
    setWordToGuess(getWord())
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className="w-full flex flex-col gap-8 m-0 items-center">
      <Message isLoser={isLoser} isWinner={isWinner}
      wordToGuess={wordToGuess}
      />
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div className="self-stretch">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App
