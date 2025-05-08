import React, {useState} from 'react'
import devlopor from '@/public/Gallerie/Developer.jpeg'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Gallerie } from '@/Data/Data';
import icon from '@/public/IMAPLogo/icon.svg'
import { AiOutlineClose } from 'react-icons/ai';

const dots = Array.from({ length: 18 });

const Galerie = () => {
     const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)



    const openModal = (img) => {
        setSelectedImage(img)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedImage(null)
    }


  return (
    <div className='w-full grid grid-cols-3 pt-10 gap-7'>

        {Gallerie.map((item, i) => (

            <div key={i} className="flex boox  flex-col relative h-[600px] gap-4 overflow-hidden rounded-xl">
                <Image className='object-cover  saturate-200 h-full w-full ' src={item.src} alt='Formations'/>
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10 w-full h-full"></div>

                <div  className="size-[45px] z-[1] cursor-pointer rounded-full backdrop-blur-[5px] absolute top-5 left-5 flex justify-center items-center rotate">
                    {dots.map((_, i) => {
                    const angle = (i / dots.length) * 2 * Math.PI;
                    const x = 22 * Math.cos(angle); // radius
                    const y = 22 * Math.sin(angle);
                    return (
                        <div
                        
                        key={i}
                        className="absolute z-[2] translate-x-1/2 translate-y-1/2 cursor-pointer hover:bg-main2  size-[2.5px] bg-[#fff] rounded-full"
                        style={{
                            top: `calc(50% + ${y}px - 2px)`,
                            left: `calc(50% + ${x}px - 2px)`
                        }}
                        />
                    );

                })}
                    <div onClick={() => openModal(item.srcView)} className="w-full cursor-pointer z-[4] h-full rounded-full absolute top-0 left-0 "></div>

                    {/* <Image src={icon} className='w-6 mix-blend-darken text-white' alt='icon' /> */}
                </div>

                <div className="flex flex-col w-full h-full items-start justify-end gap-1  p-4 absolute top-0 left-0">
                    <div className="w-10 h-1 bg-main2"></div>
                    <p className='text-[#fff] text-[25px]  font-bold'>{item.formation}</p>
                    <h5 className='text-white/90 uppercase text-[12.5px] tracking-wide leading-tight max-w-[400px]'>{item.desc}</h5>

                    <div className="flex w-full  gap-4 items-center pt-5">
                        <p className='text-white text-[17px] font-medium'>Voir Plus</p>
                        <p className='text-white text-[18px] font-semibold px-3 bg-main2 rounded-full'><LiaLongArrowAltRightSolid /></p>
                    </div>
                    <Image src={icon} alt='icon' className=" absolute right-4 bottom-4 w-6"/>
                </div>
            </div>


                    


        ))}

        {
            isModalOpen &&
                <div className='w-full h-screen bg-black fixed top-0 left-0 flex items-center justify-center z-[100]'>

                    <div className="w-full flex  h-[80%] object-contain">
                        
                        {selectedImage}
                    
                        <button
                            onClick={closeModal}
                            className="absolute rounded-full size-11 flex items-center justify-center hover:bg-main2 border-white border-dashed border-[1px] top-8 right-8  duration-200  hover:rotate-[180deg] hover:scale-[1.1] shadow-md  text-white text-3xl font-bold"
                        >
                            <AiOutlineClose />
                        </button>

                    </div>


                </div>

                
            
        }
            

       
    </div>
  )
}

export default Galerie
