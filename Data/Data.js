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
      "Nos formations sont ouvertes à tous les candidats titulaires d’un baccalauréat ou équivalent. Certaines formations peuvent nécessiter un test ou un entretien.",
  },
  {
    question: "Est-ce que les cours sont en présentiel ou en ligne ?",
    answer:
      "Nous proposons les deux formats. Certaines formations sont hybrides pour plus de flexibilité.",
  },
  {
    question: "Est-ce que IMAP délivre un diplôme reconnu ?",
    answer:
      "Oui, nous délivrons des attestations de formation et des diplômes accrédités par les autorités compétentes.",
  },
  {
    question: "Ai-je besoin d’un ordinateur personnel pour suivre la formation ?",
    answer:
      "Oui, surtout pour les formations en développement, design, ou marketing digital. Nous pouvons vous conseiller sur les spécifications recommandées.",
  },
  {
    question: "Quels logiciels vais-je apprendre à utiliser ?",
    answer:
      "Cela dépend du programme, mais en général : Adobe Suite (Photoshop, Illustrator, XD), Figma, Visual Studio Code, WordPress, et plus encore.",
  },
];
