import React from 'react'
import Formation from './Formation'
import Page2 from './Page2'
import FAQAccordion from './Faq';

export const metadata = {
  title: "𝗜𝗠𝗔𝗣 | Formations",
  description: "IMAP.ma",
};

const page = () => {
  return (
    <div className='w-full h-auto  pb-[100px]'>
    <Formation />
    {/* <FAQAccordion /> */}
</div>
  )
}

export default page



