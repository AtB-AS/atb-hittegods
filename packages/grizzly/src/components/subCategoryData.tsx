import categoryClothing from "./img/categoryClothing.png";
import categoryBags from "./img/categoryBags.png";
import categoryPersonalEffects from "./img/PersonalEffects.png";
import categoryElectronics from "./img/categoryElectronics.png";

//Name of main categories
export const mainCategory = {
    CLOTHING: "Klær",
    ELECTRONICS: "Elektronikk",
    PERSONAL_EFFECTS: "Personlige Effekter",
    BAGS: "Bagasje",
    OTHER: "other",
};
//Name of subcategories
const subCatStrings = {
    JACKETS:"Overdeler",
    HATS:"Hodeplagg",
    GLOVES:"Hansker",
    BAGS:"Sekk og Bag",
    LUGGAGE:"Bagasje",
    HANDBAGS:"Veske",
    PHONES:"Mobil",
    CHARGERS:"Ladere og kabler",
    PC_TABLETS:"PC og nettbrett",
    ID_CARDS:"Bank og ID-kort",
    KEYS:"Nøkler",
    WALLETS:"Lommebok",
    OTHER:"Annet"
}



//Type for each subcat, has its name and src to the image
type subCatProps = {
    subCatName:string,
    imgsrc:string,
}

export const categoryData = [
    {
        name: mainCategory.CLOTHING,
        imgUrl: categoryClothing,
        subCategories: [
            {name: subCatStrings.GLOVES, imgUrl: categoryBags},
            {name: subCatStrings.JACKETS, imgUrl: categoryElectronics},
            {name: subCatStrings.HATS, imgUrl: categoryClothing},
            {name: subCatStrings.OTHER, imgUrl: categoryPersonalEffects}
        ]
    },
    {
        name: mainCategory.BAGS,
        imgUrl: categoryBags,
        subCategories: [
            {name: subCatStrings.BAGS, imgUrl: categoryBags},
            {name: subCatStrings.HANDBAGS, imgUrl: categoryElectronics},
            {name: subCatStrings.LUGGAGE, imgUrl: categoryBags},
            {name: subCatStrings.OTHER, imgUrl: categoryBags}
        ]
    },
    {
        name: mainCategory.ELECTRONICS,
        imgUrl: categoryElectronics,
        subCategories: [
            {name: subCatStrings.PHONES, imgUrl: categoryBags},
            {name: subCatStrings.PC_TABLETS, imgUrl: categoryElectronics},
            {name: subCatStrings.CHARGERS, imgUrl: categoryBags},
            {name: subCatStrings.OTHER, imgUrl: categoryBags}
        ]
    },
    {
        name: mainCategory.PERSONAL_EFFECTS,
        imgUrl: categoryPersonalEffects,
        subCategories: [
            {name: subCatStrings.ID_CARDS, imgUrl: categoryBags},
            {name: subCatStrings.KEYS, imgUrl: categoryElectronics},
            {name: subCatStrings.WALLETS, imgUrl: categoryBags},
            {name: subCatStrings.OTHER, imgUrl: categoryBags}
        ]
    },
]
