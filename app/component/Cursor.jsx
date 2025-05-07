import { Cursor } from "@/components/ui/cursor";
import logo from '../../Assets/Logo.svg'
import Image from "next/image";

export default function Cursors() {
  return (
    
        <Cursor
          attachToParent
          variants={{
            initial: { height: 0, opacity: 0, scale: 0.3 },
            animate: { height: 'auto', opacity: 1, scale: 1 },
            exit: { height: 0, opacity: 0, scale: 0.3 },
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
            bounce: 0.1,
          }}
          className='overflow-hidden'
          springConfig={{
            bounce: 0.01,
          }}
        >
          <img
          // src={logo}
            src='https://i.pinimg.com/564x/4c/95/69/4c9569ab2928e5ae400a6a34e7c537a0.jpg'
            alt='IMAP'
            className='h-40 w-40'
          />
        </Cursor>
  );
}