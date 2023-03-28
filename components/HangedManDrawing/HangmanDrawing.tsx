import { BODY_PARTS } from "./Body"
import  { HangmanDrawingProps }  from '@/interfaces/HangmanDraw/HangmanDrawing'

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-[#1e3538] absolute top-0 right-0"/>
      <div className="h-[10px] w-[200px] bg-[#1e3538] ml-[120px]"/>
      <div className="h-[400px] w-[10px] bg-[#1e3538] ml-[120px]"/>
      <div className="h-[10px] w-[250px] bg-[#1e3538]"/>
    </div>
  )
}
