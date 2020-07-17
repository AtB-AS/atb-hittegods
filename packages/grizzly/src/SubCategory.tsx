import React from "react";
import { createStyles, Grid, Theme } from "@material-ui/core";
import { categoryData } from "./components/subCategoryData";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CategoryBtn from "./components/CategoryBtn";

type Props = {
  onSubCategorySelect: (category: string) => void;
  getMainCat: string;
  icon?: object;
};

type subCatProps = {
  name: string;
  imgUrl: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      textAlign: "center",
    },
  })
);

function SubCategory(props: Props) {
  const mainCat: string = props.getMainCat;
  const styles = useStyles();

  //const mainCatData = categoryData.find(mainCatName => mainCatName.name === mainCat)!;
  //const mainCatData = categoryData[0];

  function getSubCatData(mainCat: string) {
    return categoryData.find((mainCatName) => mainCatName.name === mainCat)!
      .subCategories;
  }

  const subCatData = getSubCatData(mainCat);
  function SubCategoryComponent(subprops: subCatProps) {
    return (
      <CategoryBtn
        icon={subprops.imgUrl}
        title={subprops.name}
        onClick={() => props.onSubCategorySelect(subprops.name)}
      />
    );
  }

  return (
    <div>
      <Box mt={4} mb={4}>
        <h2>Velg underkategori </h2>
      </Box>
      <Box mt={4}>
        <Grid container key={"subcategory"}>
          {subCatData.map((data) => (
            <Grid item className={styles.paper} xs={12} key={data.name}>
              <div>
                <SubCategoryComponent {...data} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default SubCategory;
