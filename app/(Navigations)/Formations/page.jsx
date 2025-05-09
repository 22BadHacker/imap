import React from 'react'
import Formation from './Formation'
import Last from '@/app/component/BiigButton';
import FAQAccordion from '@/app/component/FAQAccordion';
import Banner from '@/app/component/Banner';


export const metadata = {
  title: "𝗜𝗠𝗔𝗣 -- Formations",
  description: "IMAP.ma",
};

const page = () => {
  return (
    <div className='w-full h-auto  pb-[100px] '>

    
    <Formation />

    <div className="pb-[100px]
    ">

      <FAQAccordion /> 
    </div>
    <Last url='Contact/#rejoignez-nous' name='rejoignez-nous' title='Tout ce dont vous avez besoin pour commencer à construire votre avenir.'/>
</div>
  )
}

export default page



