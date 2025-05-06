'use client'
import React, {useState} from 'react'
import useWeb3forms from '@web3forms/react'
import { useForm, Controller } from 'react-hook-form'
import { ChevronDown } from 'lucide-react'
import { MdClose } from 'react-icons/md'

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
    <div className='w-full grid grid-cols-1 gap-[45px]'>

        <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col">
                  <p className='uppercase text-[14px] font-medium '>Nom complete *</p>
                  <input type="text" className='outline-none pt-2 pb-1 bg-transparent' />
                  <div className="h-[1.4px] bg-[#999ea5]"></div>
              </div>
              <div className="flex flex-col">
                  <p className='uppercase text-[14px] font-medium '>numéro de téléphone *</p>
                  <input type="text" className='outline-none pt-2 pb-1 bg-transparent' />
                  <div className="h-[1.4px] bg-[#999ea5]"></div>
              </div>

        </div>

        <div className="grid grid-cols-2 gap-12">

            <div className="flex flex-col">
                <p className='uppercase text-[14px] font-medium '>Ville de résidence *</p>
                <input type="text" className='outline-none pt-2 pb-1 bg-transparent' />
                <div className="h-[1.4px] bg-[#999ea5]"></div>
            </div>
              <div className="flex flex-col">
                  <p className='uppercase text-[14px] font-medium '>votre niveau d'étude *</p>

                  <select className='outline-none pt-3 pb-1 bg-transparent' name="" id="">
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
        </div>
              
              <div className="w-full grid grid-cols-2 gap-12">

                  <div className="flex flex-col col">
                      <p className='uppercase text-[14px] font-medium '>Vous avez des questions ?</p>
                      <textarea style={{resize: 'none'}} autoComplete="false" {...register("Message", {required: false})} className='inpuut   outline-none pt-2 pb-1 bg-transparent  w-full max-h-[150px] min-h-[150px]'></textarea>
                      <div className="h-[1.2px] linee bg-[#525356]"></div>
                  </div>

                  <div className="w-full justify-end items-end relative left-20">
                    <div className="size-[190px]  p-[6px] border-[1px] border-dashed rounded-full border-[#030303]">
                      <div className="size-full text-[22px] tracking-wide flex items-center justify-center text-white  rounded-full bg-[#030303]">Envoyez</div>

                    </div>

                  </div>
              </div>

          
    </div>
  )
}

export default Form2


// 030303