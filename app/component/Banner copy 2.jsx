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



        </div> */}
     
     <div className={`flex gap-5  items-center`}>
            <PiSmileyWinkLight className='text-[#000] emo' size={18}/>
            <p className='text-white   text-[14px]'>Inscriptions ouvertes ! Ne ratez pas votre place.</p>
            <p className='text-white    opacity-95 font-bold  text-[14px]'>Your Creativity Has No Limits—Show It Off on IMAP!</p>
            <PiSmileyWinkLight className='text-white' size={18}/>
            <PiSmileyXEyesThin className='text-white' size={18}/>
            <p className='text-white font-apercu   text-[14px]'>Formation 100% pratique avec des projets réels !</p>
            <p className='text-white   opacity-95 font-bold  text-[14px]'>Dare to Dream, Learn, and Achieve!</p>
            <CiFaceSmile className='text-white' size={17}/>
            <PiSmileyWinkLight className='text-white' size={18}/>
            <p className='text-white   text-[14px]'>Inscriptions ouvertes ! Ne ratez pas votre place.</p>
            <p className='text-white    opacity-95 font-bold  text-[14px]'>Your Creativity Has No Limits—Show It Off on IMAP!</p>
            <PiSmileyWinkLight className='text-white' size={18}/>
            <PiSmileyXEyesThin className='text-white' size={18}/>
            <p className='text-white font-apercu   text-[14px]'>Formation 100% pratique avec des projets réels !</p>
            <p className='text-white   opacity-95 font-bold  text-[14px]'>Dare to Dream, Learn, and Achieve!</p>
            <CiFaceSmile className='text-white' size={17}/>
        </div>
    </Marquee>
  );
}