'use client'
import React, {useState} from 'react'
import useWeb3forms from '@web3forms/react'
import { useForm } from 'react-hook-form'


  







const selecte = ['Informatique', 'Genie civil', "Bureautique", 'Comptabilité', 'Infographie','Marketing','logistique et transport', 'Gestion des entreprises' ,'La Langue Anglais' ]

const SignUp = () => {

  const [formation, setFormation] = useState([''])



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
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "6d80584c-6352-4e19-8bbb-0437d67139f9";

  const { submit: onSubmit } = useWeb3forms({
    access_key: apiKey,
    settings: {
      from_name: 'IMAP.ma',
      subject: `Certains utilisateurs sont intéressés par ${formation}`,
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(`Votre candidature a été envoyée avec succès`);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });




  return (
    <div className='z-[20] w-full h-auto pb-20 grid gap-10  lg:grid-cols-[.9fr_1fr]'>
        <div className="flex flex-col gap-4">
            
            <p className='flex gap-2 opacity-90 items-center font-mori1 text-[19px]'><span className='size-2 rounded-full bg-black/80'></span> Inscrivez-vous maintenant</p>
            <h1 className='text-[35px] max-w-[400px] text-black/80 font-semibold tracking-[.5x]'>Faites partie de quelque  chose de plus grand.</h1>
        </div>


        <form onSubmit={handleSubmit(onSubmit)} className='w-full grid-cols-1 grid gap-6'>
        <input type="checkbox" id="" className="hidden" style={{ display: "none" }} {...register("botcheck")}/>

            <div className="grid sm:grid-cols-2 gap-5 w-full">
              
                {/* Prenom */}
                <div className="flex flex-col gap-4">
                    <p className='text-black/80 font-normal text-[16.5px] '>Prenom</p>
                    <input autoComplete="false" name='Prenom'  {...register("Prenom", {
                    required: true,
                    
                  })} className='text-[14.5px] text-black/80 duration-200 outline-none bg-transparent hover:border-black border-b-[.5px] border-black/40 pb-2 w-full ' placeholder='Votre prenom' type="text"/>
                </div>
                {/* Nom */}
                <div className="flex flex-col gap-4">
                    <p className='text-black/80 font-normal text-[16.5px] '>Nom</p>
                    <input autoComplete="false" name='Nom'  {...register('Nom', {required: true})} className='text-[14.5px] text-black/80 duration-200 outline-none bg-transparent hover:border-black border-b-[.5px] border-black/40 pb-2 w-full ' placeholder='Votre nom' type="text"/>
                </div>
               
            </div>
            <div className="grid sm:grid-cols-2 gap-5 w-full pt-4">

                {/* Telephone */}
                <div className="flex flex-col gap-4">
                    <p className='text-black/80 font-normal text-[16.5px] '>Téléphone</p>
                    <input autoComplete="false"  {...register('Téléphone', {required: true})} className='text-[14.5px] text-black/80 duration-200 outline-none bg-transparent hover:border-black border-b-[.5px] border-black/40 pb-2 w-full ' placeholder='+212 612-345-678' type="text"/>
                </div>

                
                        <div className="flex flex-col gap-4">
                          <p className='text-black/80 font-normal text-[16.5px] '>Email</p>
                          <input autoComplete="false"  {...register('Email', {required: true})} className='text-[14.5px] text-black/80 duration-200 outline-none bg-transparent hover:border-black border-b-[.5px] border-black/40 pb-2 w-full ' placeholder='example@gmail.com' type="email"/>
                        </div>
                       
                       
                      </div>

                        <div className="flex flex-col gap-5 pt-4">
                          <p className='text-black/80 font-normal text-[16.5px] font-'>Je suis intéressé par...!</p>

                          <div className="flex gap-4 items-center flex-wrap">  
                            {
                            selecte.map((item) => (
                              <div 
                              onClick={(e) => {
                                handleButtonClick(item);
                                setValue("interests", [...activeButtons, item].filter((btn, index, self) => self.indexOf(btn) === index));
                              }} 
                              className={`${activeButtons.includes(item) ? 'active' : ''} focuus size-fit overflow-hidden bg-transparent z-[1] text-[15px] font-morir relative border-[.5px] border-[#cccc] px-4 py-2 rounded-full text-black/70 hover:border-black cursor-pointer`} 
                              key={item}
                              >
                              {item}
                              </div>
                            ))
                            }
                          </div>
                          
                        </div>

                        <input type="hidden" {...register("intéressé")} />
                        
                        
              <div className="flex flex-col gap-5 pt-4">
                  <p className='text-black/80 font-normal text-[16.5px] font-'>Vous avez des questions ? </p>

                 <textarea  {...register("Message", {required: true})} placeholder="écris-nous n'importe quoi"  className='border-b-[.5px] placeholder:text-[15px] pb-2 outline-none max-h-[150px] min-h-[150px] hover:border-main2 border-black/40'/>
                  
              </div>

              <button  className='sm:h-[60px] click sm:w-[170px] flex items-center h-[55px] w-[150px] text-[17px] justify-center z-[1] overflow-hidden duration-200 mt-3 relative  rounded-full text-white  sm:text-[19px] cursor-pointer font-semibold  tracking-wide'>
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
                "S'inscrire"
              )}
              </button>

              {isSubmitSuccessful && isSuccess && (
                        <div className="mt-3 text-sm font-semibold text-green-500">
                        {message}
                        </div>
                        )}

        </form>
    </div>
  )
}

export default SignUp
