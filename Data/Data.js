import Nike from '@/public/Work2/Nike.webp'
import MarocAfiche from '@/public//Work2/Moroc.webp'
import BeProd from '@/public//Work2/bussinessCard.webp'
import DragNotes from '@/public/Work2/Drag_Drop.webp'
import Message from '@/public/Work2/Sans-titre-1.webp'
import Magazin from '@/public/Work2/mag.webp'
import SignUp from '@/public/Work2/sign.webp'
import Portfolio from '@/public/Work2/Mockup.webp'
import Center from '@/public/Work2/card2.webp'


import devlopor from '@/public/Gallerie/web.gif'
import Civil from '@/public/Gallerie/ginie.gif'
import Design from '@/public/Gallerie/graphic.webp'
import comptable from '@/public/Gallerie/comp.gif'
import Logistique from '@/public/Gallerie/logii.gif'
import entre from '@/public/Gallerie/entre.gif'
import buro from '@/public/Gallerie/buro.gif'

// import code from '@/public/videos/coding.mp4'


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
 
    { name:'Portfolio Website', desc:['React JS', 'Tailwind Css', 'Informatique'], src: Portfolio, category: 'Informatique' },
     
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




export const Gallerie = [
  // { formation: 'Développement informatique', src: devlopor, desc: 'Une formation pratique pour apprendre à concevoir et développer des  web. Au programme : langages de programmation (HTML, CSS, JavaScript, PHP...), bases de données, frameworks modernes (Laravel, React...), et projets concrets pour se préparer au métier de développeur.'},
  { formation: 'Ginie Civil', src: Civil, desc: 'Une formation en génie civil axée sur l’apprentissage des logiciels essentiels tels qu’AutoCAD pour le dessin technique, Revit pour la modélisation, ainsi que d’autres outils professionnels utilisés dans la conception et l’analyse des structures.'},
  { formation: 'Infographie', src: Design, desc: 'Une formation en infographie axée sur la pratique des outils professionnels comme Photoshop, Illustrator et InDesign. Vous apprendrez à créer des logos, affiches, flyers, brochures et visuels pour le web et l’impression.'},
  { formation: 'Comptabilité Générale', src: comptable, desc: "Une formation en comptabilité générale pour apprendre à enregistrer, classer et interpréter les opérations comptables d'une entreprise : journaux, bilans, comptes de résultat, et principes comptables de base."},
  { formation: 'Transport et logistique', src: Logistique, desc: "Une formation en transport et logistique pour maîtriser la gestion des flux de marchandises, le stockage, la chaîne d’approvisionnement, ainsi que les outils et réglementations liés au transport national et international."},
  { formation: 'Gestion des Entreprises', src: entre, desc: "Une formation complète pour apprendre à piloter une entreprise : gestion financière, ressources humaines, marketing, comptabilité et prise de décision stratégique à l’aide d’outils professionnels."},
  { formation: 'Bureautique', src: buro, desc: "Une formation pour maîtriser les outils bureautiques essentiels comme Word, Excel, et PowerPoint, afin de gagner en efficacité dans le travail administratif et la gestion de documents."},
]



// Une formation en génie civil orientée logiciels : AutoCAD pour le dessin, Revit pour la 3D, et d'autres outils de conception et d’analyse.