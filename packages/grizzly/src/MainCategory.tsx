import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import categoryClothing from "./components/img/categoryClothing.png";
import categoryBags from "./components/img/categoryBags.png";
import categoryPersonalEffects from "./components/img/PersonalEffects.png";
import categoryElectronics from "./components/img/categoryElectronics.png";
import { mainCategory } from "./components/constants";
import { useHistory } from "react-router-dom";
import {categoryData} from "./components/subCategoryData";

type Props = {
  onCategorySelect: (category: string) => void;
};

type catProps = {
  name: string,
  imgUrl: string

}


function MainCategory(props: Props) {
  const [cat, setCat] = useState("");
  const h = useHistory();
  console.log(h);
  console.log(cat);

  useEffect(() => {
    console.log("mounted", h);
  }, []);


  const catData = categoryData


  function CategoryComponent(subprops: catProps) {
    return (
        <Paper>
          <h2>{subprops.name}</h2>
          <button onClick={() => props.onCategorySelect(subprops.name)}>
            <img src={subprops.imgUrl}/>
          </button>
        </Paper>
    )
  }



  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <h1>Kategorier</h1>
        {
          catData.map(mainCat => <div key={mainCat.name}>
            <CategoryComponent {...mainCat}/>

          </div>)
        }
      </Grid>
    </Grid>
  );
}

export default MainCategory;
