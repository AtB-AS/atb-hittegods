import React from "react";
import { Grid } from "@material-ui/core";
import { categoryData } from "./components/subCategoryData";
import Box from "@material-ui/core/Box";
import { Helmet } from "react-helmet";
import CategoryBtn from "./components/CategoryBtn";

type Props = {
  onCategorySelect: (category: string) => void;
  category: string;
  icon?: object;
};

type catProps = {
  name: string;
  imgUrl: string;
};

function MainCategory(props: Props) {
  const catData = categoryData;

  function CategoryComponent(subprops: catProps) {
    return (
      <CategoryBtn
        icon={subprops.imgUrl}
        title={subprops.name}
        onClick={() => props.onCategorySelect(subprops.name)}
      />
    );
  }

  return (
    <div>
      <Helmet>
        <title>Hovedkategori - AtB</title>
      </Helmet>
      <Box mt={4} mb={4}>
        <h4>Hvilken kategori passer best?</h4>
        <p>Er du usikker kan du velge "annet".</p>
      </Box>
      <Box mt={4}>
        <Grid container spacing={0}>
          {catData.map((mainCat) => (
            <Grid item xs={12} key={mainCat.name}>
              <CategoryComponent {...mainCat} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default MainCategory;
