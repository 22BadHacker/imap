import Marquee from "react-fast-marquee";
import { PiSmileyWinkLight, PiSmileyXEyesThin } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import { LiaStarOfLifeSolid } from "react-icons/lia";

const selecte = ['Développement informatique', 'Gestion des Entreprises', "Bureautique", 'Comptabilité Générale', 'Infographie','Gestion Informatique','Transport et logistique','Génie Civil' ];

export default function BannerFormations() {
  return (
    <Marquee speed={45} gradient={false}>
       
     <div className={`w-full flex items-center gap-7 `}>
            <p  className='text-white   text-[20px]'>Développement informatique</p>
            <LiaStarOfLifeSolid className="text-white" />
      </div>
    </Marquee>
  );
}