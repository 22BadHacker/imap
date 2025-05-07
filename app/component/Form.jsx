'use client'
import React, {useState} from 'react'
import useWeb3forms from '@web3forms/react'
import { useForm, Controller } from 'react-hook-form'
import { ChevronDown } from 'lucide-react'
import { MdClose } from 'react-icons/md'
import LoadingCircle from './LoadingCircle'
import AnimatedCircle from './AnimatedCircle'

import { motion } from 'framer-motion'

const selecte = ['Développement informatique', 'Gestion des entreprises', "Bureautique", 'Comptabilité', 'Infographie','Informatique de Gestion','Transport et logistique','Génie Civil' ];


const Form2 = () => {

  const [formation, setFormation] = useState([''])
  const [isActive, setIsActive] = useState(false);



  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (label) => {
    if (activeButtons.includes(label)) {

      // Remove the button from the active list
     const btnss=  setActiveButtons(activeButtons.filter((btn) => btn !== label));
      setFormation([...activeButtons, btnss]);
    } else {

      // Add the button to the active list
      setActiveButtons([...activeButtons, label]);
    }
  };


  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "892b7e5a-ae68-4eaf-bf53-9395db43e459";

  const { submit: onSubmit } = useWeb3forms({
    access_key: apiKey,
    settings: {
      from_name: 'IMAP.ma',
      subject: `Vous avez une nouvelle demande depuis imap.ma ${formation}`,
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(`Merci pour ta confiance ! On te revient très vite 💬`);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });



  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full grid grid-cols-1 gap-[45px]'>
      <input type="checkbox" id="" className="hidden" style={{ display: "none" }} {...register("botcheck")}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[45px] sm:gap-12">
              <div className="flex flex-col relative">
                  <p className='uppercase text-[14px] font-medium '>Nom complet *</p>
                  <input autoComplete='false' name='Nom_complete' {...register("Nom Complet", {required: true})}  type="text" className='outline-none pt-2 pb-1 bg-transparent inpuut' />
                  <div className="h-[1.4px] bg-[#999ea5] relative linee"></div>
              </div>
              <div className="flex flex-col relative">
                  <p className='uppercase text-[14px] font-medium '>numéro de téléphone *</p>
                  <input autoComplete='false' name='tele' {...register("Numéro de Téléphone", {required: true})} type="text" className='outline-none pt-2 pb-1 bg-transparent inpuut' />
                  <div className="h-[1.4px] relative linee bg-[#999ea5]"></div>
              </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[45px] sm:gap-12">

            <div className="flex flex-col relative">
                <p className='uppercase text-[14px] font-medium '>Ville de résidence *</p>
                <input autoComplete='false' name='Ville' {...register("Ville de résidence", {required: true})} type="text" className='outline-none pt-2 pb-1 bg-transparent inpuut' />
                <div className="h-[1.4px] bg-[#999ea5] relative linee"></div>
            </div>
              <div className="flex flex-col relative">
                  <p className='uppercase text-[14px] font-medium '>votre niveau d'étude *</p>

                  <select defaultValue="" {...register("Niveau Éducatif", {required: true})} className='outline-none pt-3 pb-1 bg-transparent inpuut' >
                    <option className='font-bold text-black/80' value="" disabled>--Choisissez votre niveau d'étude--</option>
                      <option className='font-metro' value="Niveau Bac">Niveau Bac</option>
                      <option className='font-metro' value="Baccalauréat">Bac ( diplôme obtenu )</option>
                      <option className='font-metro' value="Bac+2">Bac+2</option>
                      <option className='font-metro' value="Bac+3">Bac+3</option>
                  </select>
                  <div className="h-[1.4px] bg-[#999ea5]"></div>
              </div>

        </div>


        <div className="flex flex-col gap-5">

            <p className='uppercase text-[14px] font-medium '>Formations *</p>

            <div className="flex gap-4 items-center flex-wrap">  
                  {
                  selecte.map((item) => (
                    <div 
                    onClick={(e) => {
                    handleButtonClick(item);
                    setValue("formation", [...activeButtons, item].filter((btn, index, self) => self.indexOf(btn) === index));
                    }} 
                    className={`${activeButtons.includes(item) ? 'active' : ''} ${isSubmitSuccessful && isSuccess ? '' : 'focuus'}  size-fit overflow-hidden border-dashed  z-[1]  text-[15px]  relative border-[.5px] border-black/40 bg-transparent  px-4 py-[9px] rounded-full text-black/70 hover:border-black cursor-pointer`} 
                    key={item}
                    >
                    {item}
                    </div>
                ))
                }
              </div>
              <input type="hidden" {...register("formation" , {required: true})} />
        </div>
              
              <div className="w-full grid grid-cols-1 gap-12">

                  <div className="flex flex-col relative">
                      <p className='uppercase text-[14px] font-medium '>Vous avez des questions ?</p>
                      <textarea style={{resize: 'none'}} autoComplete="false" {...register("Message", {required: false})} className='inpuut   outline-none pt-2 pb-1 bg-transparent  w-full max-h-[150px] min-h-[150px]'></textarea>
                      <div className="h-[1.2px] relative linee bg-[#525356]"></div>
                  </div>


                    </div>
                  
                <div className="flex sm:flex-row flex-col  sm:justify-between sm:items-end sm:gap-6 gap-10 ">

                      <button  type='submit' className="flex text-[#030303] items-center justify-start gap-4  text-[45px] tracking-wide">

                        {
                          isSubmitting ? <LoadingCircle /> : <AnimatedCircle />
                        }
                      
                        {
                          isSubmitSuccessful && isSuccess ? 'C’est fait' : 'Envoyer'
                        }

                        
                        
                      </button>

                      {isSubmitSuccessful && isSuccess && (
                        <div  className={` relative -top-3 h-[20px]  overflow-hidden uppercase text-[13px] font-medium text-red-500`}>
                              <motion.span className='relative top-12' animate={{top: 0}} transition={{duration: 0.5, delay: 0.5, ease: 'easeInOut'}}>{message}</motion.span>
                              
                              </div>
                      )}
                </div>

          
    </form>
  )
}

export default Form2


// 030303 