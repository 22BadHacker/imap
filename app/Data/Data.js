import { IoCodeSlashOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export const navLinks = [
    {
        id: 1,
        title: "Accueil",
        url: "/",
    },
    {
        id: 2,
        title: "Formations",
        url: "/Formations",
    },
    {
        id: 3,
        // title: "Œuvres",
        title: "Showcase",
        url: "/Showcase",
    },
    {
        id: 4,
        title: "Contact",
        url: "/Contact",
    },
];




export const Linkss = [
    {
        href: '',
        icon: <IoLogoWhatsapp/>
    },
    {
        href: '',
        icon: <AiFillInstagram/>
    },
    {
        href: '',
        icon: <ImFacebook/>
    },
    {
        href: '',
        icon: <BiLogoLinkedin/>
    },
    {
        href: '',
        icon: <BiLogoGmail />
    },
]

export const ContactInfo = [
    {number: 1,icon: <span className="font-bold text-[18px]">Tel1 :</span>, name: '+212 604-248-395'},
    {number: 2,icon: <span className="font-bold text-[18px]">Tel2 :</span>, name: '+212 691-990-259'},
    {number: 3,icon: <span className="font-bold text-[18px]">Address:</span>, name: '37-15 Rue du Yamen . Casablanca'},
    
]