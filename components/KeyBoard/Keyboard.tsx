import { KeyboardProps } from "@/interfaces/Keyboard/Keyboard"
import styles from "./Keyboard.module.css"
import { KEYS } from "./Keys"

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid md:grid-cols-keyboard grid-cols-responsive gap-2 xl:mx-96 bg-[#aac4c4]
     rounded-xl md:text-4xl text-2xl p-5">
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
