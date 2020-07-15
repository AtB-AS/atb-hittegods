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
  GLOVES: "Hansker",
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
};

export const categoryData = [
  {
    name: mainCategory.CLOTHING,
    imgUrl: ClothingIcon,
    subCategories: [
      {
        name: subCatStrings.GLOVES,
        imgUrl: Gloves,
      },
      { name: subCatStrings.JACKETS, imgUrl: ClothingIcon },
      { name: subCatStrings.HATS, imgUrl: LueIcon },
      { name: subCatStrings.OTHER, imgUrl: Other },
    ],
  },
  {
    name: mainCategory.BAGS,
    imgUrl: LuggageIcon,
    subCategories: [
      { name: subCatStrings.BAGS, imgUrl: Bag },
      { name: subCatStrings.HANDBAGS, imgUrl: Purse },
      { name: subCatStrings.LUGGAGE, imgUrl: LuggageIcon },
      { name: subCatStrings.OTHER, imgUrl: Other },
    ],
  },
  {
    name: mainCategory.ELECTRONICS,
    imgUrl: PhoneIcon,
    subCategories: [
      { name: subCatStrings.PHONES, imgUrl: PhoneIcon },
      { name: subCatStrings.PC_TABLETS, imgUrl: Computer },
      { name: subCatStrings.CHARGERS, imgUrl: Cable },
      { name: subCatStrings.OTHER, imgUrl: Other },
    ],
  },
  {
    name: mainCategory.PERSONAL_EFFECTS,
    imgUrl: WalletIcon,
    subCategories: [
      { name: subCatStrings.ID_CARDS, imgUrl: CreditCard },
      { name: subCatStrings.KEYS, imgUrl: Key },
      { name: subCatStrings.WALLETS, imgUrl: WalletIcon },
      { name: subCatStrings.OTHER, imgUrl: Other },
    ],
  },
];
