import Marquee from "react-fast-marquee";
import { PiSmileyWinkLight, PiSmileyXEyesThin } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";

const selecte = ['Développement informatique', 'Gestion des Entreprises', "Bureautique", 'Comptabilité Générale', 'Infographie','Gestion Informatique','Transport et logistique','Génie Civil' ];

export default function Banner() {
  return (
    <Marquee speed={45} gradient={false}>
        {/* <div className="flex gap-4">
            <p className="text-[16px] font-semibold uppercase">Inscriptions ouvertes ! Ne ratez pas votre place.</p>
            <div className="w-[.5px] h-5"></div>
            <p className="text-[16px] font-semibold uppercase">Formation 100% pratique avec des projets réels !</p>

          border-t-[1px] border-t-[#2a2a2a]/50

        </div> */}
     
     <div className={`flex gap-5  items-center py-2 `}>
            <PiSmileyWinkLight className='text-[#000] emo' size={18}/>
            <p className='text-black   text-[14px]'>Inscriptions ouvertes ! Ne ratez pas votre place.</p>
            <p className='text-black    opacity-95 font-bold  text-[14px]'>Votre créativité n'a pas de limites : montrez-la sur IMAP</p>
            <PiSmileyWinkLight className='text-black' size={18}/>
            <PiSmileyXEyesThin className='text-black' size={18}/>
            <p className='text-black font-apercu   text-[14px]'>Formation 100% pratique avec des projets réels !</p>
            <p className='text-black   opacity-95 font-bold  text-[14px]'>osez rêver, apprendre et réussir !</p>
            <CiFaceSmile className='text-black' size={17}/>
            <PiSmileyWinkLight className='text-black' size={18}/>
            <p className='text-black   text-[14px]'>Inscriptions ouvertes ! Ne ratez pas votre place.</p>
            <p className='text-black    opacity-95 font-bold  text-[14px]'>Votre créativité n'a pas de limites : montrez-la sur IMAP</p>
            <PiSmileyWinkLight className='text-black' size={18}/>
            <PiSmileyXEyesThin className='text-black' size={18}/>
            <p className='text-black font-apercu   text-[14px]'>Formation 100% pratique avec des projets réels !</p>
            <p className='text-black   opacity-95 font-bold  text-[14px]'>osez rêver, apprendre et réussir !</p>
            <PiSmileyXEyesThin className='text-black' size={18}/>
            <CiFaceSmile className='text-black' size={17}/>
        </div>
    </Marquee>
  );
}