import React from 'react'
import { TextLoop } from '@/components/ui/text-loop'

const TextLoop1 = () => {
  return (
    <div className='grid text-black grid-cols-[1fr_.2fr] whitespace-pre-wrap text-[19px] font-morir font-light'>
       Découvrez nos Etudiant {' '}
        <TextLoop
                className='overflow-y-clip'
                transition={{
                  type: 'spring',
                  stiffness: 900,
                  damping: 80,
                  mass: 10,
                }}
                variants={{
                  initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: 'blur(4px)',
                  },
                  animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                  },
                  exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: 'blur(4px)',
                  },
                }}
              >
                <span>Œuvre</span>
                <span>Réalisation</span>
                <span>Conception</span>
                <span>Travail</span>
                <span>Art</span>
              </TextLoop>
      
    </div>
  )
}

export default TextLoop
