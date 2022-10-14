import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdSportsFootball } from "react-icons/md";
import { ImHeadphones } from "react-icons/im";
import { GiBookshelf } from "react-icons/gi";

export let data = [
  {
    id: 1,
    branch: "Technology",
    icon: <HiOutlineDesktopComputer />,
    questions: [
      {
        id: 1,
        question: "Le cerveau de tout système informatique est _________?",
        options: ["Mémoire", "Carte Mère", "Disque Dur", "Processeur"],
        answers: [4],
        dejavu: false,
      },
      {
        id: 2,
        question: "Le système binaire utilise la base ______?",
        options: ["2", "10", "8", "16"],
        answers: [1],
        dejavu: false,
      },
      {
        id: 3,
        question: "Le système octal utilise la base ______?",
        options: ["2", "10", "8", "16"],
        answers: [3],
        dejavu: false,
      },
      {
        id: 4,

        question: "Le système décimal utilise la base ______?",
        options: ["2", "10", "8", "16"],
        answers: [2],
        dejavu: false,
      },
      {
        id: 5,

        question: "ASCII signifie _______?",
        options: [
          "A American standard code for information interchange",
          "All purpose scientific code for information interchange",
          "American security code for information interchange",
          "American security code for information interchange",
        ],
        answers: [1],
        dejavu: false,
      },

      {
        id: 6,

        question: "Laquelle des mémoires suivantes est non volatile ?",
        options: ["SRAM", "DRAM", "ROM", "Tout les réponses sont vraies"],
        answers: [3],
        dejavu: false,
      },
    ],
  },
  {
    id: 2,
    branch: "Sport",
    icon: <MdSportsFootball />,
    questions: [
      {
        id: 1,

        question: "Quelle est la durée d'un match de football ?",
        options: ["120 mn", "90 mn", "45 mn", "30 mn"],
        answers: [2],
        dejavu: false,
      },
      {
        id: 2,

        question: "Quand et où a eu lieu la première Coupe du monde ?",
        options: [
          "Le 13 juillet 1930 en Uruguay",
          "Le 05 Juillet 1945 en Argentine",
          "Le 05 juin 1935 en brésil",
        ],
        answers: [1],
        dejavu: false,
      },
      {
        id: 3,

        question:
          "Quelle équipe a remporté le plus grand nombre de Coupes du monde ?",
        options: ["Brésil", "Argentine", "Allemand", "Angleterre"],
        answers: [1],
        dejavu: false,
      },
      {
        id: 4,

        question:
          "Combien de temps dure la prolongation d'un match de football Selon les règles ?",
        options: ["10 mn", "15 mn", "30 mn"],
        answers: [3],
        dejavu: false,
      },
      {
        id: 5,

        question:
          "Combien de joueurs une équipe de football compte-t-elle sur le terrain ?",
        options: ["6", "7", "11"],
        answers: [3],
        dejavu: false,
      },
      {
        id: 6,

        question:
          "Dans quelle ville se trouve le stade de football de plus grande capacité au monde ?",
        options: [
          "Pyongyang, en Corée du Nord",
          "Newwork city à l'état unis (USA)",
          "Saint-Pétersbourg en Russie",
          "Wembley en Angleterre",
        ],
        answers: [1],
        dejavu: false,
      },
      {
        id: 7,

        question: "Qui a gagné la Coupe du monde 2010 ?",
        options: ["Espagne", "Allemand", "France", "Italie"],
        answers: [1],
        dejavu: false,
      },
      {
        id: 8,

        question:
          "Quel est le nom de l'entraineur de l'équipe futsal du Maroc en 2022 ?",
        options: [
          "WALID ERRAGRAGUI",
          "HOUCINE AAMOTA",
          "HICHAM DGUIG",
          "BADDOU ZAKI",
        ],
        answers: [3],
        dejavu: false,
      },
      {
        id: 9,

        question:
          "Quelle équipe a remporté la Coupe du monde en France en 1998 ?",
        options: ["L'Espagne", "La France", "L'Italie", "Le Brésil"],
        answers: [2],
        dejavu: false,
      },
      {
        id: 10,

        question:
          "Quelle équipe a remporté le plus grand nombre de Champions League en Europe ?",
        options: ["BARCELONE", "BAYERN MUNICH", "REAL MADRID", "LIVERPOOL"],
        answers: [3],
        dejavu: false,
      },
    ],
  },
  {
    id: 3,
    branch: "Music",
    icon: <ImHeadphones />,
    questions: [
      {
        id: 1,

        q: "who's the best football player in the world ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
      {
        id: 2,

        q: "what player scored most goals in one single year ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
      {
        id: 3,

        q: "best bicycle goal ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
    ],
  },
  {
    id: 4,
    branch: "General Culture",
    icon: <GiBookshelf />,
    questions: [
      {
        id: 1,

        question: "Combien de lettres comporte l'alphabet arabe ?",
        options: ["26", "24", "28", "27"],
        answers: [4],
        dejavu: false,
      },
      {
        id: 2,

        question: "Quels sont les pays frontaliers du Maroc ?",
        options: ["La Mauritanie", "Le Mali", "L'Algérie", "La Tunisie"],
        answers: [1, 3],
        dejavu: false,
      },
      {
        id: 3,

        question: "Compléter la phrase suivante :Proverbe marocain :",
        string: "Qui est mordu par ................... craint la corde.",
        options: ["Le chien", "Le serpent", "Le lion", "Le chat"],
        answers: [2],
        dejavu: false,
      },
      {
        id: 4,

        question: "Compléter la phrase suivante :Proverbe marocain :",
        string: "Quand................ tombe, les couteaux pleuvent.",
        options: ["La mouche", "La souris", "La vache", "Le cheval"],
        answers: [3],
        dejavu: false,
      },
      {
        id: 5,

        question: "Compléter la phrase suivante :Proverbe marocain :",
        string: "Il vend .................. et se moque de son acquéreur .",
        options: ["Le pain", "Les carottes", "Le singe", "L'animal"],
        answers: [3],
        dejavu: false,
      },
      {
        id: 6,

        question: "Quelle est la capitale du Qatar ?",
        options: ["Abu Dhabi", "Amman", "Doha", "Dubaï"],
        answers: [3],
        dejavu: false,
      },
      {
        id: 7,

        question:
          "Lequel de ces États ne fait pas partie de l'Union européenne ?",
        options: ["Croatie", "Lituanie", "Malte", "Norvège"],
        answers: [4],
        dejavu: false,
      },
      {
        id: 8,

        question: "Quelle est la capitale du Brésil ?",
        options: [
          "Brasilia",
          "Rio de Janeiro",
          "Salvador de Bahia",
          "São Paulo",
        ],
        answers: [1],
        dejavu: false,
      },
      {
        id: 9,

        question: "Quelle était à l'origine la fonction de Facebook ?",
        options: [
          "un site de rencontres",
          "un réseau social pour cuisinier",
          "un album photo en ligne",
          "un réseau social estudiantin",
        ],
        answers: [4],
        dejavu: false,
      },
      {
        id: 10,

        question: "Le soleil tourne-t-il autour de lui-même ?",
        options: ["Oui", "Non"],
        answers: [1],
        dejavu: false,
      },
      {
        id: 11,

        question: "Quel est le plus long fleuve d'Afrique ?",
        options: ["LE NIL", "BIN EL-OUIDANE", "OUM ARRABIA"],
        answers: [1],
        dejavu: false,
      },
      {
        id: 12,

        question:
          "Quel est le plus grand continent de la planète en termes de superficie ?",
        options: ["Oui", "Non"],
        answers: [1],
        dejavu: false,
      },
      {
        id: 13,

        question: "Le soleil tourne-t-il autour de lui-même ?",
        options: ["Asie", "Afrique", "Europe"],
        answers: [1],
        dejavu: false,
      },
      {
        id: 14,

        question: "Quel est le continent le plus peuplé de la planète ?",
        options: ["Asie", "Australie", "Amérique"],
        answers: [1],
        dejavu: false,
      },
      {
        id: 15,

        question: "Quel est le continent le plus peuplé de la planète ?",
        options: ["1914", "1939", "1945", "1951"],
        answers: [3],
        dejavu: false,
      },
    ],
  },
];
