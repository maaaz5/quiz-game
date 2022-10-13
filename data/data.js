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
        q: "what's the best prgramming language ?",
        a: ["JavaScript", "C++"],
        t: ["JavaScript"],
        dejavu: false,
      },
      {
        q: "what's web 3.0 ?",
        a: ["JavaScript", "CRUD", "CRUD"],
        t: ["JavaScript"],
        dejavu: false,
      },
      {
        q: "which OS is better for developers ?",
        a: ["MAC", "JavaScript", "JavaScript"],
        t: ["MAC"],
        dejavu: false,
      },
      {
        q: "what's the best prgramming language ?",
        a: ["JavaScript", "JavaScript"],
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
        question: "Quelle est la durée d'un match de football ?",
        options: ["120 mn", "90 mn", "45 mn", "30 mn"],
        answer: ["90 mn"],
        dejavu: false,
      },
      {
        question: "Quand et où a eu lieu la première Coupe du monde ?",
        options: [
          "Le 13 juillet 1930 en Uruguay",
          "Le 05 Juillet 1945 en Argentine",
          "Le 05 juin 1935 en brésil",
        ],
        answer: ["Le 13 juillet 1930 en Uruguay"],
        dejavu: false,
      },
      {
        question:
          "Quelle équipe a remporté le plus grand nombre de Coupes du monde ?",
        options: ["Brésil", "Argentine", "Allemand", "Angleterre"],
        answer: ["Brésil"],
        dejavu: false,
      },
      {
        question:
          "Combien de temps dure la prolongation d'un match de football Selon les règles ?",
        options: ["10 mn", "15 mn", "30 mn"],
        answer: ["30 mn"],
        dejavu: false,
      },
      {
        question:
          "Combien de joueurs une équipe de football compte-t-elle sur le terrain ?",
        options: ["6", "7", "11"],
        answer: ["11"],
        dejavu: false,
      },
      {
        question:
          "Dans quelle ville se trouve le stade de football de plus grande capacité au monde ?",
        options: [
          "Pyongyang, en Corée du Nord",
          "Newwork city à l’état unis (USA)",
          "Saint-Pétersbourg en Russie",
          "Wembley en Angleterre",
        ],
        answer: ["Pyongyang, en Corée du Nord"],
        dejavu: false,
      },
      {
        question: "Qui a gagné la Coupe du monde 2010 ?",
        options: ["Espagne", "Allemand", "France", "Italie"],
        answer: ["Espagne"],
        dejavu: false,
      },
      {
        question:
          "Quel est le nom de l’entraineur de l’équipe futsal du Maroc en 2022 ?",
        options: [
          "WALID ERRAGRAGUI",
          "HOUCINE AAMOTA",
          "HICHAM DGUIG",
          "BADDOU ZAKI",
        ],
        answer: ["HICHAM DGUIG"],
        dejavu: false,
      },
      {
        question:
          "Quelle équipe a remporté la Coupe du monde en France en 1998 ?",
        options: ["L’Espagne", "La France", "L’Italie", "Le Brésil"],
        answer: ["La France"],
        dejavu: false,
      },
      {
        question:
          "Quelle équipe a remporté le plus grand nombre de Champions League en Europe ?",
        options: ["BARCELONE", "BAYERN MUNICH", "REAL MADRID", "LIVERPOOL"],
        answer: ["REAL MADRID"],
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
        q: "who's the best football player in the world ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
      {
        q: "what player scored most goals in one single year ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
      {
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
        q: "who's the best football player in the world ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
      {
        q: "what player scored most goals in one single year ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
      {
        q: "best bicycle goal ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
    ],
  },
];
