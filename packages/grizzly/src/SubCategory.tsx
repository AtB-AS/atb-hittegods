import React, { useState } from "react";
import { mainCategory } from "./components/constants";
import { createStyles, Grid, styled, Theme } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { categoryData } from "./components/subCategoryData";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

type Props = {
  onSubCategorySelect: (category: string) => void;
  getMainCat: string;
  //icon?: object;
};

type subCatProps = {
  name: string;
  imgUrl: string;
};

const CategoryButton = styled(Button)({
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  height: "160px",
  padding: "0 30px",
  width: "160px",
});

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
      <CategoryButton onClick={() => props.onSubCategorySelect(subprops.name)}>
        <div>
          <AccessAlarmIcon />
          {/*<img src={subprops.imgUrl} />*/}
        </div>
        <div>{subprops.name}</div>
      </CategoryButton>
    );
  }

  return (
    <div>
      <Box mt={6}>
        <h2>Velg underkategori </h2>
      </Box>
      <Box mt={4}>
        <Grid container spacing={3} key={"subcategory"}>
          {subCatData.map((data) => (
            <Grid item className={styles.paper} xs={6} sm={6} md={3}>
              <div key={data.name}>
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
