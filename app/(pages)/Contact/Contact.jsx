
import React from 'react'
import First from '@/app/component/First'
import SignUp from './SignUp'
import Info from './Info'


const Contact = () => {
  return (
    <div className='w-full container  z-[1] h-auto max-w-[1450px] px-5  sm:pt-[0px] mx-auto grid grid-cols-1 gap-[40px]'>
        <First desc='Contactez-nous' title="Ensemble, Créons l'Avenir dès Aujourd'hui"/>
        <Info />
        <SignUp/>
        
              
    </div>
  )
}

export default Contact
