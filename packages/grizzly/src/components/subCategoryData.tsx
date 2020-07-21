import LueIcon from "../components/icons/Lue.svg";
import ClothingIcon from "../components/icons/sweater.svg";
import PhoneIcon from "../components/icons/Mobil.svg";
import LuggageIcon from "../components/icons/Hovedbagasje.svg";
import WalletIcon from "../components/icons/lommebok.svg";

import Computer from "../components/icons/PC.svg";
import Cable from "../components/icons/kabel.svg";

import Other from "../components/icons/annet.svg";

import CreditCard from "../components/icons/bankkort.svg";
import Gloves from "../components/icons/hanskerOgvotter.svg";
import Key from "../components/icons/Nokkel.svg";

import Bag from "../components/icons/sekk.svg";

import Purse from "../components/icons/veske.svg";

import SekkImg from "./img/SekkImg";
import VeskeImg from "./img/VeskeImg";
import AnnetImg from "./img/AnnetImg";
import BankkortImg from "./img/BankkortImg";
import GenserImg from "./img/GenserImg";
import HanskeImg from "./img/HanskerImg";
import HovedBaggasjeImg from "./img/HovedBaggasjeImg";
import KabelImg from "./img/KabelImg";
import LommebokImg from "./img/LommebokImg";
import LueImg from "./img/LueImg";
import MobilImg from "./img/MobilImg";
import NokkelImg from "./img/NokkelImg";
import PcImg from "./img/PcImg";

//Name of main categories
export const mainCategory = {
  CLOTHING: "Klær",
  ELECTRONICS: "Elektronikk",
  PERSONAL_EFFECTS: "Personlige effekter",
  BAGS: "Bagg, vesker og sekk",
  OTHER: "Annet",
};
//Name of subcategories
export const subCatStrings = {
  JACKETS: "Overdeler",
  HATS: "Hodeplagg",
  GLOVES: "Hansker og votter",
  BAGS: "Sekk og Bag",
  LUGGAGE: "Bagasje",
  HANDBAGS: "Veske",
  PHONES: "Mobil",
  CHARGERS: "Ladere og kabler",
  PC_TABLETS: "PC og nettbrett",
  ID_CARDS: "Bank og ID-kort",
  KEYS: "Nøkler",
  WALLETS: "Lommebok",
  OTHER: "Annet",
};

//Type for each subcat, has its name and src to the image
type subCatProps = {
  subCatName: string;
  imgsrc: string;
  icon: any;
};

export const categoryData = [
  {
    name: mainCategory.CLOTHING,
    description: "Jakker, hodeplagg, hansker og votter og annet",
    imgUrl: ClothingIcon,
    icon: GenserImg,
    subCategories: [
      {
        name: subCatStrings.GLOVES,
        imgUrl: Gloves,
        icon: HanskeImg,
        description: "",
      },
      {
        name: subCatStrings.JACKETS,
        imgUrl: ClothingIcon,
        icon: GenserImg,
        description: "",
      },
      {
        name: subCatStrings.HATS,
        imgUrl: LueIcon,
        icon: LueImg,
        description: "",
      },
      {
        name: subCatStrings.OTHER,
        imgUrl: Other,
        icon: AnnetImg,
        description: "",
      },
    ],
  },
  {
    name: mainCategory.BAGS,
    description: "Baggasje, sekk og bagg, veske og annet",
    imgUrl: LuggageIcon,
    icon: HovedBaggasjeImg,
    subCategories: [
      { name: subCatStrings.BAGS, imgUrl: Bag, icon: SekkImg, description: "" },
      {
        name: subCatStrings.HANDBAGS,
        imgUrl: Purse,
        icon: VeskeImg,
        description: "",
      },
      {
        name: subCatStrings.LUGGAGE,
        imgUrl: LuggageIcon,
        icon: HovedBaggasjeImg,
        description: "",
      },
      {
        name: subCatStrings.OTHER,
        imgUrl: Other,
        icon: AnnetImg,
        description: "",
      },
    ],
  },
  {
    name: mainCategory.ELECTRONICS,
    description: "Mobil, PC, ladere og ledinger og annet",
    imgUrl: PhoneIcon,
    icon: MobilImg,
    subCategories: [
      {
        name: subCatStrings.PHONES,
        imgUrl: PhoneIcon,
        icon: MobilImg,
        description: "",
      },
      {
        name: subCatStrings.PC_TABLETS,
        imgUrl: Computer,
        icon: PcImg,
        description: "",
      },
      {
        name: subCatStrings.CHARGERS,
        imgUrl: Cable,
        icon: KabelImg,
        description: "",
      },
      {
        name: subCatStrings.OTHER,
        imgUrl: Other,
        icon: AnnetImg,
        description: "",
      },
    ],
  },
  {
    name: mainCategory.PERSONAL_EFFECTS,
    description: "Lommebok, bankkort, nøkler og annet",
    imgUrl: WalletIcon,
    icon: LommebokImg,
    subCategories: [
      {
        name: subCatStrings.ID_CARDS,
        imgUrl: CreditCard,
        icon: BankkortImg,
        description: "",
      },
      {
        name: subCatStrings.KEYS,
        imgUrl: Key,
        icon: NokkelImg,
        description: "",
      },
      {
        name: subCatStrings.WALLETS,
        imgUrl: WalletIcon,
        icon: LommebokImg,
        description: "",
      },
      {
        name: subCatStrings.OTHER,
        imgUrl: Other,
        icon: AnnetImg,
        description: "",
      },
    ],
  },
  {
    name: mainCategory.OTHER,
    imgUrl: Other,
    description: "Annet",
    icon: AnnetImg,
    subCategories: [
      {
        name: subCatStrings.OTHER,
        imgUrl: Other,
        icon: AnnetImg,
        description: "",
      },
    ],
  },
];
