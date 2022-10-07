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
        a: ["JavaScript", "JavaScript"],
        dejavu: false,
      },
      {
        q: "what's web 3.0 ?",
        a: ["CRUD", "CRUD", "CRUD"],
        dejavu: false,
      },
      {
        q: "which OS is better for developers ?",
        a: ["MAC", "MAC", "MAC"],
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
