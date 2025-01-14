import { Magnetic } from "@/components/ui/magnetic";
import { GoLink } from "react-icons/go";

export function MagneticNested({click}) {
  const springOptions = { bounce: 0.1 };

  return (
    <Magnetic
      intensity={0.2}
      springOptions={springOptions}
      actionArea='global'
      range={200}
    >
      <button

        onClick={click}
        type='button'
        className='size-[53px] text-[25px] relative btn overflow-hidden rounded-full border-[.5px] cursor-pointer border-main text-white flex items-center justify-center'
      >
        <Magnetic
          intensity={0.1}
          springOptions={springOptions}
          actionArea='global'
          range={200}
        >
          <GoLink className='duration-200'/>
        </Magnetic>
      </button>
    </Magnetic>
  );
}


{/* <div onClick={() => setDrop(!drop)} className="size-[53px] text-[25px] relative btn overflow-hidden rounded-full border-[.5px] cursor-pointer border-main text-white flex items-center justify-center">{drop ? <motion.span animate={{opacity: 1 }} transition={{duration: 0.2, delay: 0.1, ease: 'easeInOut', type: 'spring', stiffness: 100}} initial={{opacity: 0}}><TfiClose/></motion.span> : <span  ><GoLink className='duration-200'/></span> }</div> */}
