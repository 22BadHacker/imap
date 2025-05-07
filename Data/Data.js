import Nike from '@/public/Work2/Nike.webp'
import MarocAfiche from '@/public//Work2/Moroc.webp'
import BeProd from '@/public//Work2/bussinessCard.webp'
import DragNotes from '@/public/Work2/Drag_Drop.webp'
import Message from '@/public/Work2/Sans-titre-1.webp'
import Magazin from '@/public/Work2/mag.webp'
import SignUp from '@/public/Work2/sign.webp'
import Portfolio from '@/public/Work2/Mockup.webp'
import Center from '@/public/Work2/card2.webp'


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
        // title: "Réalisations",
        title: "Showcase",
        url: "/Showcase",
    },
    {
        id: 4,
        title: "Contact",
        url: "/Contact",
    },
];



export const WorkGalerie = [
    { name:'Nike Poster', desc:['Photoshope', 'Infographie'], src: Nike, category: 'Infographie' },
 
    { name:'Sign Up Page', desc:['HTML', 'CSS', 'Informatique'], src:  SignUp, category: 'Informatique' },
 
    { name:'Be Point PROD', desc:['Illustrator', 'Business Card', 'Infographie'], src: BeProd, category: 'Infographie' },
 
    { name:'Drag & Drop Notes', desc:['HTML', 'CSS','JS', 'Informatique'], src: DragNotes, category: 'Informatique' },
 
    { name:'Notification Page', desc:['HTML', 'CSS', 'Informatique'], src: Message, category: 'Informatique' },
 
    { name:'Magazine Cover', desc:['Photoshope', 'Infographie'], src: Magazin, category: 'Infographie' },
 
    { name:'Moroccan Affiche', desc:['Photoshope', 'Infographie'], src: MarocAfiche, category: 'Infographie' },
 
    { name:'Portfolio Website', desc:['React', 'Tailwind Css', 'Informatique'], src: Portfolio, category: 'Informatique' },
     
    { name:'Business Card', desc:['Illustrator', 'Infographie'], src: Center, category: 'Infographie' },
]



export const FaqData = [
  {
    question: "Quels sont les critères d’admission à IMAP ?",
    answer:
      "Nos formations sont ouvertes à tous les profils ayant un niveau baccalauréat ou plus. Que vous soyez fraîchement diplômé ou en reconversion, vous êtes le bienvenu. ",
  },
  {
    question: "Les formations sont-elles en présentiel ou à distance ?",
    answer:
      "Nos formations se déroulent en présentiel dans notre centre, afin de garantir un suivi personnalisé et un vrai contact humain. Certains modules complémentaires peuvent être proposés en ligne."

  },
  {
    question: "Comment puis-je m’inscrire à une formation ?",
    answer:
      "C’est simple ! Cliquez sur le bouton “S’inscrire” dans le menu, remplissez le formulaire, et un membre de notre équipe vous contactera sous 24h. Vous pouvez aussi visiter notre centre si vous préférez échanger en personne."

  },
  // {
  //   question: "Est-ce que IMAP délivre un diplôme reconnu ?",
  //   answer:
  //     "Oui, nous délivrons des attestations de formation et des diplômes accrédités par les autorités compétentes.",
  // },
  {
    question: "Ai-je besoin d’un ordinateur personnel pour suivre la formation ?",
    answer:
      "Des ordinateurs sont disponibles dans nos salles, mais avoir votre propre machine est vraiment un plus — surtout si vous suivez une formation en développement informatique ou en infographie. Vous pourrez ainsi pratiquer chez vous, gagner en autonomie et progresser à votre rythme.",
  },
  {
    question: "Quels logiciels vais-je apprendre à utiliser ?",
    answer:
      "Cela dépend du programme, mais en général, vous apprendrez à utiliser des outils comme la suite Adobe (Photoshop, Illustrator, InDesign) pour l’infographie, Visual Studio Code pour le développement, AutoCAD pour le génie civil, ainsi que des logiciels bureautiques comme PowerPoint et Excel. Et bien sûr, d'autres outils spécialisés selon votre formation.",
  },
];
