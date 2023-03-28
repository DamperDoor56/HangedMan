const HEAD = (
    <div className="w-[50px] h-[50px] rounded-full border-8 border-solid
    border-[#006d77] absolute top-[50px] right-[-20px]"
    key={'head'}
    />
  )
  
  const BODY = (
    <div className="w-[10px] h-[100px] bg-[#006d77] absolute top-[100px]
    right-0"
    key={'body'}
    />
  )
  
  const RIGHT_ARM = (
    <div className="w-[100px] h-[10px] bg-[#006d77] absolute top-[150px]
    right-[-100px] rotate-[-30deg] transform origin-bottom-left"
    key={'right-arm'}
     />
  )
  
  const LEFT_ARM = (
    <div className="w-[100px] h-[10px] bg-[#006d77] absolute top-[150px]
    right-[10px] rotate-[30deg] transform origin-bottom-right"
    key={'left-arm'}
    />
  )
  
  const RIGHT_LEG = (
    <div className="w-[100px] h-[10px] bg-[#006d77] absolute top-[240px]
    right-[-75px] rotate-[60deg] transform origin-left-bottom" 
    key={'right-leg'}
    />
  )
  
  const LEFT_LEG = (
    <div className="w-[100px] h-[10px] bg-[#006d77] absolute top-[240px]
    right-0 rotate-[-60deg] transform origin-right-bottom" 
    key={'left-leg'}
    />
  )
  
 export const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
  