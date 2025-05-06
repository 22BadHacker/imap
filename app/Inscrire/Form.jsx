'use client'
import React, {useState} from 'react'
import useWeb3forms from '@web3forms/react'
import { useForm, Controller } from 'react-hook-form'
import { ChevronDown } from 'lucide-react'
import { MdClose } from 'react-icons/md'


const selecte = ['Développement informatique', 'Gestion des entreprises', "Bureautique", 'Comptabilité', 'Infographie','Informatique de Gestion','Transport et logistique','Génie Civil' ];



const Label = ({name}) => (
  <label className='text-[16.5px] labeel font-medium font-sans uppercase tracking-wide  text-[#1a1918]/80' htmlFor="formations">{name} <span className='text-red-500 text-[19px]'>*</span></label>
)

const Form = () => {

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
    <div id='rejoignez-nous' className='grid grid-cols-1 h-full gap-10 pr-7  pt-[40px] w-full relative '>

        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-11 flex-col relative w-full">
        <input type="checkbox" id="" className="hidden" style={{ display: "none" }} {...register("botcheck")}/>

            
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-12">
                <div className="flex flex-col  relative">
                    <Label name='Nom complet' />
                    <input autoComplete="false" name='Nom_complet'  {...register("Nom Complet", {
                    required: true,
                    
                    })} className='text-[17px] inpuut font-mori tracking-wide font-bold text-[#1c1d20]/90 outline-none bg-transparent   py-[10px] w-full ' type="text"/>
                    <div className="w-full relative h-[1.5px] bg-gray-500/50 linee"></div>
                </div>

                <div className="flex flex-col">
                    <Label name='Numéro de téléphone' />
                    <input autoComplete="false" name='téléphone'  {...register("Numéro de Téléphone", {
                    required: true,
                    
                    })} className='text-[17px] inpuut font-mori tracking-wide font-bold text-[#1c1d20]/90 outline-none bg-transparent   py-[10px] w-full' type="text"/>
                    <div className="w-full relative h-[1.5px] bg-gray-500/50 linee"></div>
                </div>

            </div>
              
              <div className="flex flex-col ">
                  <Label name='Ville de résidence' />
                  <input autoComplete="false" name='Ville'  {...register("Ville de résidence", {
                  required: true,
                  
                  })} className='text-[17px] inpuut font-mori tracking-wide font-bold text-[#1c1d20]/90 outline-none bg-transparent   py-[10px] w-full ' type="text"/>
                  <div className="w-full relative h-[1.2px] bg-gray-500/50 linee"></div>
              </div>
          
                <div className="flex flex-col ">
                  <Label name="votre niveau d'étude " />
                  <select 
                    
                    {...register("Niveau Éducatif", { required: true })} 
                    defaultValue=""
                    className='text-[17px] inpuut font-mori tracking-wide font-bold text-[#1c1d20]/90 outline-none bg-transparent   py-[10px] w-full'>
                    <option className='font-bold text-black/80' value="" disabled>--Choisissez votre niveau d'étude--</option>
                    <option className='font-metro' value="Niveau Bac">Niveau Bac</option>
                    <option className='font-metro' value="Baccalauréat">Bac ( diplôme obtenu )</option>
                    <option className='font-metro' value="Bac+2">Bac+2</option>
                    <option className='font-metro' value="Bac+3">Bac+3</option>
                  </select>
                  <div className="w-full relative h-[1.5px] bg-gray-500/50 linee"></div>
                </div>


              <div className="flex flex-col gap-5">
                <Label name='formations' />
                <div className="flex gap-4 items-center flex-wrap">  
                  {
                  selecte.map((item) => (
                    <div 
                    onClick={(e) => {
                    handleButtonClick(item);
                    setValue("formation", [...activeButtons, item].filter((btn, index, self) => self.indexOf(btn) === index));
                    }} 
                    className={`${activeButtons.includes(item) ? 'active' : ''} ${isSubmitSuccessful && isSuccess ? '' : 'focuus'}  size-fit overflow-hidden border-dashed  z-[1]  text-[16px]  relative border-[.5px] border-black/40 bg-transparent  px-4 py-[9px] rounded-full text-black/70 hover:border-black cursor-pointer`} 
                    key={item}
                    >
                    {item}
                    </div>
                ))
                }
                </div>
                <input type="hidden" {...register("formation" , {required: true})} />
            </div>

            <div className="flex flex-col">
              
                <label className='text-[16.5px] labeel font-medium font-sans uppercase tracking-wide  text-[#1a1918]/80' htmlFor="message">Vous avez des questions ? <span className='text-green-500 text-[19px]'>*</span></label>
                <textarea style={{resize: 'none'}} autoComplete="false" {...register("Message", {required: false})} className='text-[17px] inpuut font-mori tracking-wide font-bold text-[#1c1d20]/90 outline-none bg-transparent   py-[10px]  w-full max-h-[200px] min-h-[200px]'></textarea>
                <div className="w-full relative h-[1.3px] bg-gray-500/50 linee"></div>
            </div>


            <button  className='h-[62px] click w-[200px] flex items-center  justify-center z-[1] overflow-hidden duration-200 mt-3 relative  rounded-full text-white  text-[16px] cursor-pointer  font-metro font-semibold  tracking-wide'>
                {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Envoyer maintenant"
              )}
              </button>

              {isSubmitSuccessful && isSuccess && (
                  <div  className={`z-[20] font-medium font-sans bg-[#f5f9ff] text-black p-[10px] rounded-md shadow-sm border-[.5px] border-black/20 fixed bottom-[60px] left-5 sm:left-10 lg:bottom-20 lg:left-20 flex  items-center gap-7 text-[12.5px] lg:text-[16px] transition-all duration-200 ease-in-out ${!isActive ? 'flex' : 'hidden pointer-events-none'}`}>
                  {message}
                      <span onClick={()=>setIsActive(!isActive)} className='text-[17px] rounded-full cursor-pointer size-[22px] flex items-center justify-center border-main2 text-main2 hover:text-white hover:bg-main2 border-[1px] border-dashed'><MdClose /></span>
                  </div>
              )}
            
        </form>
        
    </div>
  )
}

export default Form


