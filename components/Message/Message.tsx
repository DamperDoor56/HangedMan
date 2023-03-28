
type Message = {
    isWinner: boolean, 
    isLoser: boolean,
    wordToGuess: string
}

export function Message({ isWinner, isLoser,wordToGuess}: Message) {
   return (
    <div className="w-full flex flex-col gap-8 m-0 items-center">
      { isWinner || isLoser ? 
        <div className="text-3xl text-center bg-[#83c5be] absolute 
        rounded-xl text-[#363c3a] z-50 p-20 flex flex-col gap-10
        border-[#006d77] border-2 top-3">
          <div>
          {isWinner && "You won! You're great :D"}
          {isLoser && `Nice Try, the word was '${wordToGuess}'`}
          </div>
          <div className="bg-[#006d77] rounded-xl p-5 text-white">
          <a href="/">Want to try again?</a>
          </div>
        </div> : null
      }
    </div>
  )
}
