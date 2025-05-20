import Nike from '@/public/Work2/Nike.webp'
import MarocAfiche from '@/public//Work2/Moroc.webp'
import BeProd from '@/public//Work2/bussinessCard.webp'
import DragNotes from '@/public/Work2/Drag_Drop.webp'
import Message from '@/public/Work2/Sans-titre-1.webp'
import Magazin from '@/public/Work2/mag.webp'
import SignUp from '@/public/Work2/sign.webp'
import Portfolio from '@/public/Work2/Mockup.webp'
import Center from '@/public/Work2/card2.webp'
import Archive from '@/public/Work2/the_archive.jpg'
import Carrot from '@/public/Work2/Carrot.png'
import mega from '@/public/Work2/megaWeb.webp'


import devlopor from '@/public/Gallerie/web.gif'
import Civil from '@/public/Gallerie/Ginie.jpg'
import Design from '@/public/Gallerie/desiign.gif'
import comptable from '@/public/Gallerie/comp.gif'
import Logistique from '@/public/Gallerie/Logistique.jpg'
import entre from '@/public/Gallerie/entre.gif'
import buro from '@/public/Gallerie/banner.webp'

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
export const navLinks2 = [
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
    {
        id: 4,
        title: "S'inscrire",
        url: "/inscription",
    },
];



export const WorkGalerie = [
    {colSpan: 'col-span-1', name:'Nike Poster', desc:['Photoshope', 'Infographie'], src: Nike, category: 'Infographie' }, 
    {colSpan: 'col-span-1', name:'Sign Up Page', desc:['HTML', 'CSS', 'Informatique'], src:  SignUp, category: 'Informatique' }, 
    {colSpan: 'col-span-1', name:'Be Point PROD', desc:['Illustrator', 'Business Card', 'Infographie'], src: BeProd, category: 'Infographie' }, 
    {colSpan: 'col-span-1', name:'Drag & Drop Notes', desc:['HTML', 'CSS','JS', 'Informatique'], src: DragNotes, category: 'Informatique' }, 
    {colSpan: 'col-span-1', name:'Notification Page', desc:['HTML', 'CSS', 'Informatique'], src: Message, category: 'Informatique' }, 
    {colSpan: 'col-span-1', name:'Magazine Cover', desc:['Photoshope', 'Infographie'], src: Magazin, category: 'Infographie' }, 
    {colSpan: 'col-span-1', name:'Moroccan Affiche', desc:['Photoshope', 'Infographie'], src: MarocAfiche, category: 'Infographie' }, 
    {colSpan: 'col-span-1', name:'Portfolio Website', desc:['React JS', 'Tailwind Css', 'Informatique'], src: Portfolio, category: 'Informatique' },     
    {colSpan: 'col-span-1', name:'Business Card', desc:['Illustrator', 'Infographie'], src: Center, category: 'Infographie' },
    {colSpan: 'col-span-1', name:'the archive', desc:['Logo','Illustrator', 'Infographie'], src: Archive, category: 'Infographie' },
    {colSpan: 'col-span-2', name:'Carrot', desc:['Logo','Illustrator', 'Infographie'], src: Carrot, category: 'Infographie' },
    {colSpan: 'col-span-2', name:'Megasoft Website', desc:['React JS', 'Tailwind Css', 'Informatique'], src: mega, category: 'Infographie' },
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
  // {keys: ['Programmation', 'Algorithmes', 'Full Stack'], formation: 'Développement informatique', src: devlopor, desc: 'Une formation pratique pour apprendre à concevoir et développer des  web. Au programme : langages de programmation (HTML, CSS, JavaScript, PHP...), bases de données, frameworks modernes (Laravel, React...), et projets concrets pour se préparer au métier de développeur. '},
  {title: "site Web de portfolio",keys: "Programmation - website - Front end - portfolio", formation: 'Développement informatique', src: Portfolio, desc: "Maîtrisez les bases et les outils avancés du web. De la création d'interfaces modernes (HTML, CSS, JavaScript, React...) à la construction de systèmes robustes côté serveur (PHP, Laravel, MySQL...), vous apprendrez à concevoir des sites et des applications dynamiques, fonctionnels et sécurisés — du concept à la mise en ligne."},
  // {title: "",keys: ['Programmation', '', ''], formation: 'Ginie Civil', src: Civil, desc: 'Une formation en génie civil axée sur l’apprentissage des logiciels essentiels tels qu’AutoCAD pour le dessin technique, Revit pour la modélisation, ainsi que d’autres outils professionnels utilisés dans la conception et l’analyse des structures.'},
  {title: "Projet bâtiment",keys: "AutoCAD - Plans techniques - Architecture - Ingénierie ", formation: 'Ginie Civil', src: Civil, desc: "Apprenez les bases de la conception, du calcul et de la réalisation d’infrastructures. Des fondations aux structures, vous serez formé à lire des plans, utiliser les outils de DAO/CAO (AutoCAD, Revit…), comprendre les matériaux et respecter les normes de construction."},
  {title: "Business Card",keys: "Design graphique - Illustrator - Photoshop - Créativité", formation: 'Infographie', src: BeProd, desc: "Un parcours concret et stimulant pour maîtriser les outils pros — Photoshop, Illustrator, InDesign — et apprendre à donner vie à vos idées. Logos, affiches, flyers, visuels web ou imprimés… ici, vous créez, testez, explorez, et développez votre propre style."},
  {title: "",keys: ['Programmation', '', ''], formation: 'Comptabilité Générale', src: comptable, desc: "Une formation en comptabilité générale pour apprendre à enregistrer, classer et interpréter les opérations comptables d'une entreprise : journaux, bilans, comptes de résultat, et principes comptables de base."},
  {title: "",keys: ['Programmation', '', ''], formation: 'Transport et logistique', src: Logistique, desc: "Une formation en transport et logistique pour maîtriser la gestion des flux de marchandises, le stockage, la chaîne d’approvisionnement, ainsi que les outils et réglementations liés au transport national et international."},
  {title: "",keys: ['Programmation', '', ''], formation: 'Gestion des Entreprises', src: entre, desc: "Une formation complète pour apprendre à piloter une entreprise : gestion financière, ressources humaines, marketing, comptabilité et prise de décision stratégique à l’aide d’outils professionnels."},
  {title: "Logiciels de bureautique",keys: "PowerPoint - Word - exel - Outlook - Microsoft Office", formation: 'Bureautique', src: buro, desc: "Maîtrisez les outils essentiels du monde professionnel : Word, Excel, PowerPoint, Outlook... Apprenez à rédiger des documents clairs, créer des tableaux dynamiques, automatiser vos tâches et concevoir des présentations efficaces. Une formation indispensable pour booster votre efficacité au quotidien."},
]


// export const center = ['Accueil', 'Formations', 'Showcase', 'Contact', "S'inscrire"]
export const center = [
  { href: '/', name: 'Accueil' },
  { href: '/Formations', name: 'Formations' },
  { href: '/Showcase', name: 'Showcase' },
  { href: '/Contact', name: 'Contact' },
  { href: '/inscription', name: "S'inscrire" }
]

export const socials = [
  { href: 'https://wa.me/+212604248395', name: 'WhatsApp' },
  { href: 'https://www.instagram.com/institut.ima/', name: 'Instagram' },
  { href: 'https://www.facebook.com/share/1EcT1aCryx/', name: 'Facebook' },
  { href: 'mailto:contact.imap@gmail.com', name: 'Gmail' },
  { href: 'https://www.linkedin.com/company/imap-ma/', name: 'LinkedIn' },

]


// export const selecte = ['Informatique', 'Génie Civil',  "Bureautique", 'Comptabilité', 'Infographie']
export const formation = [
  { href: '/Formations/Informatique', name: 'Informatique' },
  { href: '/Formations/Génie Civil', name: 'Génie Civil' },
  { href: '/Formations/Bureautique', name: "Bureautique" },
  { href: '/Formations/Comptabilité', name: 'Comptabilité' },
  { href: '/Formations/Infographie', name: 'Infographie' }]





  export const formation2 = [
    { href: '/Formations/Informatique', name: 'Développement web', desc: 'Donnez vie à vos idées avec du code. Cette formation vous prépare à devenir développeur web ou logiciel, prêt pour le monde pro.' },
  ];


// Une formation en génie civil orientée logiciels : AutoCAD pour le dessin, Revit pour la 3D, et d'autres outils de conception et d’analyse.