import icons from "./icons";
import images from "./images";

export { icons, images };

const UserCircle = icons.usercircle;
const Gear = icons.Gear;
const Bell = icons.Bell;
const Lock = icons.Lock;
const Calendar = icons.Calendar;
const City = icons.City;
const Language = icons.Language;
const Logout = icons.Logout;

export const categories = [
  { id: 1, name: "Vehicules", slug: "vehicules", image: images.vehicules },
  {
    id: 9,
    name: "Informatique et multimédia",
    slug: "informatique-et-multimedia",
    image: images.informatique,
  },
  { id: 14, name: "Immobilier", slug: "immobilier", image: images.immobilier },
  {
    id: 30,
    name: "Meubles & Electroménagers",
    slug: "meubles-electromenagers",
    image: images.meubles,
  },
  { id: 37, name: "Mode", slug: "mode", image: images.mode },
  { id: 46, name: "Animaux", slug: "animaux", image: images.animaux },
  { id: 54, name: "Loisirs", slug: "loisirs", image: images.loisirs },
  { id: 145, name: "Vente en gros", slug: "vente-en-gros", image: images.gros },
  { id: 107, name: "Beauté", slug: "beaute", image: images.beaute },
  { id: 73, name: "Emplois", slug: "jobs", image: images.emplois },
  { id: 97, name: "Services", slug: "services", image: images.services },
  { id: 114, name: "Dons", slug: "dons", image: images.dons },
];

export const profile = [
  {
    icon: <UserCircle />,
    title: "Profile",
    url: "/account/edit",
  },
  {
    icon: <Gear />,
    title: "Paramètres du compte",
    url: "/account/password",
  },
  // {
  //   icon: <Bell />,
  //   title: "Paramètres de notification",
  //   url: "#",
  // },
  // {
  //   icon: <Lock />,
  //   title: "Sécurité",
  //   url: "#",
  // },
  // {
  //   icon: <Calendar />,
  //   title: "Rendez-vous en voiture",
  //   url: "#",
  // },
  {
    icon: <City />,
    title: "Ville",
    url: "#",
  },
  {
    icon: <Language />,
    title: "Langue",
    url: "#",
  },
  {
    icon: <Logout />,
    title: "Déconnexion",
    color: "red-600",
  },
];
