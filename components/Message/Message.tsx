import type { Message } from "@/interfaces/Message/Message";

export function Message({ isWinner, isLoser,wordToGuess}: Message) {
   return (
    <div className="w-full flex flex-col gap-8 m-0 items-center">
      { isWinner || isLoser ? 
        <div className="text-3xl text-center bg-[#83c5be] absolute 
        rounded-xl text-[#363c3a] z-50 p-20 flex flex-col gap-10
        border-[#006d77] border-2 top-3">
          <div>
          {isWinner && "Ganaste! Que genial sos! :D <3"}
          {isLoser && `Buen intento! uwu 
           Pero la palabra es: '${wordToGuess}'`}
          </div>
          <div className="bg-[#006d77] rounded-xl p-5 text-white">
          <a href="/">Queres intentar de nuevo?</a>
          </div>
        </div> : null
      }
    </div>
  )
}
