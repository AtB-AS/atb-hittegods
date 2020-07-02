import React, { useState } from "react";
import { mainCategory } from "./components/constants";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import {categoryData} from "./components/subCategoryData";

type Props = {
  onSubCategorySelect: (category: string) => void;
  getMainCat: string;
};

type subCatProps = {
  name:string,
  imgUrl:string,
}





function SubCategory(props: Props) {

    const mainCat: string = props.getMainCat;


    //const mainCatData = categoryData.find(mainCatName => mainCatName.name === mainCat)!;
    //const mainCatData = categoryData[0];



    function getSubCatData(mainCat:string) {

        return categoryData.find(mainCatName => mainCatName.name === mainCat)!.subCategories;

    }

    const subCatData=getSubCatData(mainCat)



    function SubCategoryComponent(subprops: subCatProps) {
        return (
            <Paper>
                <h2>{subprops.name}</h2>
                <button onClick={() => props.onSubCategorySelect(subprops.name)}>
                    <img src={subprops.imgUrl}/>
                </button>
            </Paper>
        )
    }


    return (
        <Grid container spacing={3} key={"subcategory"}>
            <Grid item sm={6}>
                <h1>Underkategorier</h1>
                {
                    subCatData.map(data => <div key={data.name}>
                        <SubCategoryComponent  {...data} />
                    </div>)
                }
            </Grid>
        </Grid>
    );


}

export default SubCategory;
