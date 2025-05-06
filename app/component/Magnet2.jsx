import { Magnetic } from "@/components/ui/magnetic";
import { GoLink } from "react-icons/go";

export function MagneticNested({name}) {
  const springOptions = { bounce: 0.1 };

  return (
    <Magnetic
      intensity={0.2}
      springOptions={springOptions}
      actionArea='global'
      range={200}
    >
      <div className="size-[182px] md:scale-100 sm:scale-[.9] scale-[.85] z-[5] out bg-transparent backdrop-blur-[2px] bg-black/05 flex justify-center items-center rounded-full border-main2 border-dashed border-[.5px]">
        <button

          
          type='button'
          className='size-[170px]  in font-sans rounded-full text-[18px]  font-medium duration-200 ease-in-out shadow-lg  bg-main2 text-white'
        >
          <Magnetic
            intensity={0.1}
            springOptions={springOptions}
            actionArea='global'
            range={200}
          >
            {name}
          </Magnetic>
        </button>
      </div>
    </Magnetic>
  );
}


{/* <div onClick={() => setDrop(!drop)} className="size-[53px] text-[25px] relative btn overflow-hidden rounded-full border-[.5px] cursor-pointer border-main text-white flex items-center justify-center">{drop ? <motion.span animate={{opacity: 1 }} transition={{duration: 0.2, delay: 0.1, ease: 'easeInOut', type: 'spring', stiffness: 100}} initial={{opacity: 0}}><TfiClose/></motion.span> : <span  ><GoLink className='duration-200'/></span> }</div> */}
